# # from django.shortcuts import render

# # from rest_framework.generics import RetrieveAPIView


# # from rest_framework.mixins import ListModelMixin,CreateModelMixin
# # #Create your views here.
# # from rest_framework.request import Request
# # from rest_framework.response import Response
# # from rest_framework.decorators import api_view

# # from rest_framework.viewsets import ModelViewSet

# # from .models import Lead
# # from .serilizer import Leadserilizer

# # class leads(ModelViewSet):
# #     queryset=Lead.objects.all()
# #     serializer_class=Leadserilizer






# # from rest_framework.viewsets import ModelViewSet
# # from rest_framework.permissions import IsAuthenticated

# # from rest_framework.filters import SearchFilter, OrderingFilter
# # from django_filters.rest_framework import DjangoFilterBackend

# # from .models import Lead
# # from .serializers import LeadSerializer, LeadAssignSerializer
# # from F_Activity_logs.models import ActivityLog
# # from common.permission import IsAgentORIsAdmin
# # from rest_framework.response import Response

# # class LeadViewSet(ModelViewSet):

# #     serializer_class = LeadSerializer
# #     permission_classes = [IsAgentORIsAdmin]
# #     filter_backends = [
# #         DjangoFilterBackend,
# #         SearchFilter,
# #         OrderingFilter,
# #     ]


# from rest_framework.viewsets import ModelViewSet
# from rest_framework.permissions import IsAuthenticated

# from rest_framework.filters import SearchFilter, OrderingFilter
# from django_filters.rest_framework import DjangoFilterBackend

# from .models import Lead
# from .serializers import LeadSerializer, LeadAssignSerializer
# from F_Activity_logs.models import ActivityLog
# from common.permission import IsAgentORIsAdmin
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated 
# from rest_framework_simplejwt.authentication import JWTAuthentication
# class LeadViewSet(ModelViewSet):

#     queryset = Lead.objects.all()
#     serializer_class = LeadSerializer

#     authentication_classes = [JWTAuthentication]
#     permission_classes = [IsAgentORIsAdmin]

#     filter_backends = [
#         DjangoFilterBackend,
#         SearchFilter,
#         OrderingFilter,
#     ]


#     search_fields = [
#         "name",
#         "email",
#         "phone",
#     ]

#     ordering_fields = [
#         "created_at",
#         "updated_at",
#         "name",
#         "status",
#     ]

#     ordering = [
#         "-created_at"
#     ]



# def list(self, request, *args, **kwargs):

#     print("========== LEAD API DEBUG ==========")
#     print("USER:", request.user)
#     print("USER ID:", getattr(request.user, "id", None))
#     print("AUTHENTICATED:", request.user.is_authenticated)
#     print("ROLE:", getattr(request.user, "role", None))
#     print("AUTH:", request.auth)
#     print("====================================")

#     return super().list(request, *args, **kwargs)


#     def get_queryset(self):

#         user = self.request.user

#         if user.role == "ADMIN":
#             return Lead.objects.all().order_by("-created_at")

#         return Lead.objects.filter(
#             assigned_to=user
#         ).order_by("-created_at")

#     def destroy(self, request, *args, **kwargs):

#         if request.user.role != "ADMIN":
#             return Response(
#                 {
#                     "detail": "Only admins can delete leads."
#                 },
#                 status=403
#             )

#         return super().destroy(request, *args, **kwargs)

#     def perform_create(self, serializer):

#         lead = serializer.save(
#             created_by=self.request.user
#         )

#         ActivityLog.objects.create(
#             user=self.request.user,
#             lead=lead,
#             action="LEAD_CREATED",
#             descption=f"Lead {lead.name} was created"
#         )

#     def perform_update(self, serializer):

#         # Get the existing lead BEFORE updating
#         lead = self.get_object()

#         old_status = lead.status

#         # Save the changes
#         updated_lead = serializer.save()

#         new_status = updated_lead.status

#         # Only create ActivityLog if status actually changed
#         if old_status != new_status:

#             ActivityLog.objects.create(
#                 user=self.request.user,
#                 lead=updated_lead,
#                 action="STATUS_CHANGED",
#                 descption=(
#                     f"Lead {updated_lead.name} status changed "
#                     f"from {old_status} to {new_status}"
#                 )
#             )










from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.db import models
from rest_framework.decorators import action

from .models import Lead
from .serializers import LeadSerializer, LeadAssignSerializer
from F_Activity_logs.models import ActivityLog
from common.permission import IsAgentORIsAdmin
from rest_framework.permissions import IsAuthenticated

class LeadViewSet(ModelViewSet):

    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter,
    ]

    search_fields = [
        "name",
        "email",
        "phone",
    ]

    ordering_fields = [
        "created_at",
        "updated_at",
        "name",
        "status",
    ]

    ordering = [
        "-created_at"
    ]

    def list(self, request, *args, **kwargs):

        print("========== LEAD API DEBUG ==========")
        print("USER:", request.user)
        print("USER ID:", getattr(request.user, "id", None))
        print("AUTHENTICATED:", request.user.is_authenticated)
        print("ROLE:", getattr(request.user, "role", None))
        print("AUTH:", request.auth)
        print("====================================")

        return super().list(request, *args, **kwargs)

    def get_queryset(self):

        user = self.request.user

        if user.role == "ADMIN":
            return Lead.objects.all().order_by("-created_at")

        return Lead.objects.filter(
            models.Q(assigned_to=user) | models.Q(created_by=user)
        ).distinct().order_by("-created_at")

    def destroy(self, request, *args, **kwargs):

        if request.user.role != "ADMIN":
            return Response(
                {
                    "detail": "Only admins can delete leads."
                },
                status=403
            )

        return super().destroy(request, *args, **kwargs)

    def perform_create(self, serializer):

        lead = serializer.save(
            created_by=self.request.user
        )

        ActivityLog.objects.create(
            user=self.request.user,
            lead=lead,
            action="LEAD_CREATED",
            descption=f"Lead {lead.name} was created"
        )

    def perform_update(self, serializer):

        lead = self.get_object()

        old_status = lead.status

        updated_lead = serializer.save()

        new_status = updated_lead.status

        if old_status != new_status:

            ActivityLog.objects.create(
                user=self.request.user,
                lead=updated_lead,
                action="STATUS_CHANGED",
                descption=(
                    f"Lead {updated_lead.name} status changed "
                    f"from {old_status} to {new_status}"
                )
            )

    @action(detail=True, methods=["post"], url_path="assign")
    def assign_lead(self, request, pk=None):
        lead = self.get_object()
        serializer = LeadAssignSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        agent = serializer.validated_data["agent_id"]
        lead.assigned_to = agent
        lead.save(update_fields=["assigned_to"])

        ActivityLog.objects.create(
            user=request.user,
            lead=lead,
            action="LEAD_ASSIGNED",
            descption=f"Lead {lead.name} assigned to {agent.get_full_name()}"
        )

        return Response({
            "detail": f"Lead {lead.name} assigned to {agent.get_full_name()} successfully.",
            "lead": LeadSerializer(lead).data,
        })

