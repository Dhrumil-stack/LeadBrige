from django.utils import timezone

from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

from .models import FollowUp
from .serilizer import FollowUpSeriliuzer

from F_Activity_logs.models import ActivityLog
from common.permission import IsAgentORIsAdmin


class FollowUps(ModelViewSet):

    permission_classes = [IsAgentORIsAdmin]
    serializer_class=FollowUpSeriliuzer

    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter,
    ]

    search_fields = [
        "remarks",
        "lead__name",
        "lead__email",
        "lead__phone",
    ]

    ordering_fields = [
        "due_date",
        "status",
        "created_at",
        "completed_at",
    ]

    ordering = ["due_date"]

    filterset_fields = [
        "status",
        "assigned_to",
    ]

    def get_queryset(self):

        user = self.request.user

        if user.role == "ADMIN":
            return FollowUp.objects.all()

        elif user.role == "AGENT":
            return FollowUp.objects.filter(
                assigned_to=user
            ) | FollowUp.objects.filter(
                lead__created_by=user
            )

        return FollowUp.objects.none()

    # def get_serializer_class(self):

    #     if self.action == "partial_update":
    #         return FollowUpSeriliuzerUpdate

    #     return FollowUpSeriliuzer

    @action(detail=True, methods=["post"])
    def complete(self, request, pk=None):

        followup = self.get_object()


        if followup.status == "COMPLETED":
            return Response(
                {
                    "message": "FollowUp is already completed."
                },
                status=status.HTTP_400_BAD_REQUEST
            )


        followup.status = "COMPLETED"
        followup.completed_at = timezone.now()

        followup.save(
            update_fields=[
                "status",
                "completed_at",
                "updated_at"
            ]
        )

        # Create ActivityLog
        ActivityLog.objects.create(
            user=request.user,
            lead=followup.lead,
            action="FOLLOWUP_COMPLETED",
            descption=(
                f"Follow-up for lead "
                f"{followup.lead.name} was completed"
            )
        )

        return Response(
            {
                "message": "FollowUp completed successfully",
                "followup_id": str(followup.id),
                "status": followup.status,
                "completed_at": followup.completed_at,
            },
            status=status.HTTP_200_OK
        )

    def perform_create(self, serializer):

        user = self.request.user

        if user.role == "AGENT":
            followup = serializer.save(assigned_to=user)
        else:
            # Admin must provide assigned_to via request data
            followup = serializer.save()

        ActivityLog.objects.create(
            user=user,
            lead=followup.lead,
            action="FOLLOWUP_CREATED",
            descption=(
                f"Follow-up created for lead "
                f"{followup.lead.name}"
            )
        )