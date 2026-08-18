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
