from django.contrib.auth.models import AbstractUser
from django.db import models

from common.choices import UserRole
from .manager import UserManager

class User(AbstractUser):
    username = None

    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)

    
    email = models.EmailField(
        unique=True,
        db_index=True,
    )

    phone = models.CharField(
        max_length=20,
        blank=True,
        null=True,
    )

    role = models.CharField(
        max_length=20,
        choices=UserRole.choices,
        default=UserRole.AGENT,
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []


    objects = UserManager()

    class Meta:
        db_table = "users"

    def __str__(self):
        return self.email


    from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

from .views import MeAPIView,UserCreateAPIView
from . import views

urlpatterns=[
    path("login/",TokenObtainPairView.as_view(),name="login"),
    path("refresh/",TokenRefreshView.as_view(),name="refresh"),
    path("me/",MeAPIView.as_view(),name="me"),
    path("user/",UserCreateAPIView.as_view(),name="user-create"),
]
from django.conf import settings
from django.db import models

from common.models import TimeStampedModel
from A_User.models import User


from common.choices import (
    LeadSource,
    LeadStatus,
    ServiceInterest,
)


class Lead(TimeStampedModel):
    name = models.CharField(max_length=255)

    phone = models.CharField(
        max_length=20,
        db_index=True,
    )

    email = models.EmailField(
        blank=True,
        null=True,
    )

    company_name = models.CharField(
        max_length=255,
        blank=True,
    )

    source = models.CharField(
        max_length=30,
        choices=LeadSource.choices,
    )

    service_interest = models.CharField(
        max_length=50,
        choices=ServiceInterest.choices,
    )

    status = models.CharField(
        max_length=30,
        choices=LeadStatus.choices,
        default=LeadStatus.NEW,
        db_index=True,
    )

    deal_value = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=0,
    )

    assigned_to = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name="assigned_leads",
        null=True,
        blank=True,
    )

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name="created_leads",
        null=True,
    )

    next_followup_at = models.DateTimeField(
        null=True,
        blank=True,
    )

    class Meta:
        db_table = "leads"
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["status"]),
            models.Index(fields=["source"]),
        ]

    def __str__(self):
        return self.name
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register("leads", views.LeadViewSet, basename="lead")

urlpatterns = router.urls


from django.conf import settings
from django.db import models
from common.models import TimeStampedModel

class LeadNote(TimeStampedModel):

    lead = models.ForeignKey(
        "B_Leads.Lead",
        on_delete=models.CASCADE,
        related_name="notes",
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="user",
    )

    note = models.TextField()

    class Meta:
        db_table = "lead_notes"
        ordering = ["-created_at"]
        from rest_framework.routers import SimpleRouter
from .views import LeadsNotes

router=SimpleRouter()
router.register("LeadNote",LeadsNotes,basename="leadNotes")


urlpatterns=router.urls


from celery import shared_task
from django.utils import timezone

from .models import FollowUp
from E_Notification.models import Notification


@shared_task
def create_followup_reminders():

    now = timezone.now()

    followups = FollowUp.objects.filter(
        status="PENDING",
        due_date__lte=now,
        assigned_to__isnull=False,
    )

    created_count = 0

    for followup in followups:

        Notification.objects.create(
            user=followup.assigned_to,
            title="Follow-up Reminder",
            message=(
                f"Follow-up for lead "
                f"{followup.lead.name} is due."
            ),
        )

        created_count += 1

    return f"{created_count} reminders created"

from rest_framework.routers import SimpleRouter
from .views import FollowUps

router=SimpleRouter()
router.register("FollowUp",FollowUps,basename="followup")


urlpatterns=router.urls
from django.conf import settings
from django.db import models


from common.models import TimeStampedModel


class Notification(TimeStampedModel):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="notifications",
    )

    title = models.CharField(max_length=255)

    message = models.TextField()

    is_read = models.BooleanField(default=False)

    class Meta:
        db_table = "notifications"
        ordering = ["-created_at"]from rest_framework.routers import SimpleRouter

from E_Notification import views

router=SimpleRouter()
router.register("Noti",views.Notificationtyy,basename='noti')


urlpatterns=router.urlsfrom django.conf import settings
from django.db import models


from common.models import TimeStampedModel
from common.choices import ActivityAction


class ActivityLog(TimeStampedModel):
    lead = models.ForeignKey(
        "B_Leads.Lead",
        on_delete=models.CASCADE,
        related_name="activities",
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
    )

    action = models.CharField(
        max_length=50,
        choices=ActivityAction.choices,
    )

    descption= models.CharField(
        max_length=500,
        blank=True,
    )

    class Meta:
        db_table = "activity_logs"
        ordering = ["-created_at"]from rest_framework.routers import SimpleRouter
from .views import ActivityLogs

router=SimpleRouter()
router.register("ActivityLogs",ActivityLogs,basename="ActivityLogs")


urlpatterns=router.urls