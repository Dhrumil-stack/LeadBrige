from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import LeadNote
from .serilizer import LeadNotex
from F_Activity_logs.models import ActivityLog

class LeadsNotes(ModelViewSet):
   # queryset=LeadNote.objects.all()
    serializer_class=LeadNotex

    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter,
    ]

    search_fields = [
        "note",
        "lead__name",
    ]

    ordering_fields = [
        "created_at",
    ]

    ordering = ["-created_at"]

    def get_queryset(self):

        user = self.request.user

        if user.role == "ADMIN":
            return LeadNote.objects.select_related('lead', 'user').all()

        return LeadNote.objects.select_related('lead', 'user').filter(
            lead__assigned_to=user
        )
    
  

    def perform_create(self, serializer):

        note = serializer.save(
            user=self.request.user
        )

        ActivityLog.objects.create(
            user=self.request.user,
            lead=note.lead,
            action="NOTE_ADDED",
            descption=f"Note added to lead {note.lead.name}"
        )