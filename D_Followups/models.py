from django.conf import settings
from django.db import models


from common.models import TimeStampedModel
from common.choices import FollowupStatus


class FollowUp(TimeStampedModel):
    lead = models.ForeignKey(
        "B_Leads.Lead",
        on_delete=models.CASCADE,
        related_name="followups",
    )

    assigned_to = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )

    reminder_sent = models.BooleanField(default=False)
    due_date = models.DateTimeField()

    status = models.CharField(
        max_length=20,
        choices=FollowupStatus.choices,
        default=FollowupStatus.PENDING,
    )

    remarks = models.TextField(
        blank=True,
    )

    completed_at = models.DateTimeField(
        null=True,
        blank=True,
    )

    class Meta:
        db_table = "followups"
        ordering = ["due_date"]
