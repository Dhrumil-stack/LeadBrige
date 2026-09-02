from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Notification
from .serilizer import NotiSerilizer,UpdateNotificationSerilizer
from common.permission import IsAgentORIsAdmin


class Notificationtyy(ModelViewSet):
    permission_classes=[IsAgentORIsAdmin]

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
        return Notification.objects.filter(user=self.request.user).select_related('user')

    def get_serializer_class(self):
        if self.action == "partial_update":
            return UpdateNotificationSerilizer
        return NotiSerilizer

    @action(detail=False, methods=["post"], url_path="mark-all-read")
    def mark_all_read(self, request):
        count = self.get_queryset().filter(is_read=False).update(is_read=True)
        return Response({"marked_read": count})

    @action(detail=True, methods=["post"], url_path="mark-read")
    def mark_read(self, request, pk=None):
        notif = self.get_object()
        notif.is_read = True
        notif.save(update_fields=["is_read"])
        return Response({"status": "read"})
