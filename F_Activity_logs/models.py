from django.conf import settings
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
        ordering = ["-created_at"]