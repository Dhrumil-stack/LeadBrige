from django.shortcuts import render
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .serilizer import ActivitySerilizer
from .models import ActivityLog
from common.permission import IsAgentORIsAdmin

class ActivityLogs(ReadOnlyModelViewSet):
   # queryset=ActivityLog.objects.all()
  
    permission_classes=[IsAgentORIsAdmin]

    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter,
    ]

    search_fields = [
        "descption",
        "action",
        "lead__name",
    ]

    ordering_fields = [
        "created_at",
        "action",
    ]

    ordering = ["-created_at"]

    filterset_fields = [
        "action",
        "user",
    ]

    def get_queryset(self):
        from django.db import models
        user = self.request.user
        if user.role == "ADMIN":
          return ActivityLog.objects.select_related('lead', 'user').all()
        return ActivityLog.objects.select_related('lead', 'user').filter(
            models.Q(lead__assigned_to=user) | models.Q(lead__created_by=user)
        ).distinct()

    
    serializer_class=ActivitySerilizer