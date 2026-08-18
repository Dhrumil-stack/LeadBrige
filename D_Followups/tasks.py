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