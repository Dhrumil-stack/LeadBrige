from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Notification
from .serilizer import NotiSerilizer,UpdateNotificationSerilizer
from common.permission import IsAgentORIsAdmin


class Notificationtyy(ModelViewSet):
    permission_classes=[IsAgentORIsAdmin]
    #queryset=Notification.objects.all()

    filter_backends = [
        DjangoFilterBackend,
        SearchFilter,
        OrderingFilter,
    ]

    search_fields = [
        "title",
        "message",
    ]

    ordering_fields = [
        "created_at",
        "is_read",
    ]

    ordering = ["-created_at"]

    filterset_fields = [
        "is_read",
    ]

    def get_queryset(self):
        return Notification.objects.filter(user=self.request.user)
    
    def get_serializer_class(self):
        if self.action == "partial_update":
            return UpdateNotificationSerilizer
        return NotiSerilizer
