from django.shortcuts import render
from rest_framework.viewsets import ReadOnlyModelViewSet
from .serilizer import ActivitySerilizer
from .models import ActivityLog
from common.permission import IsAgentORIsAdmin

class ActivityLogs(ReadOnlyModelViewSet):
   # queryset=ActivityLog.objects.all()
  
    permission_classes=[IsAgentORIsAdmin]

    def get_queryset(self):
        from django.db import models
        user = self.request.user
        if user.role == "ADMIN":
          return ActivityLog.objects.all()
        return ActivityLog.objects.filter(
            models.Q(lead__assigned_to=user) | models.Q(lead__created_by=user)
        ).distinct()

    
    serializer_class=ActivitySerilizer