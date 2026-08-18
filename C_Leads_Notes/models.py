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
        related_name="lead_notes",
    )

    note = models.TextField()

    class Meta:
        db_table = "lead_notes"
        ordering = ["-created_at"]
        