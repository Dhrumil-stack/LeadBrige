from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from .models import Notification
from .serilizer import NotiSerilizer,UpdateNotificationSerilizer
from common.permission import IsAgentORIsAdmin


class Notificationtyy(ModelViewSet):
    permission_classes=[IsAgentORIsAdmin]
    #queryset=Notification.objects.all()

    def get_queryset(self):
        print("USER:", self.request.user)
        print("USER ID:", self.request.user.id)
        return Notification.objects.filter(user=self.request.user)
    
    def get_serializer_class(self):
        if self.action == "partial_update":
            return UpdateNotificationSerilizer
        return NotiSerilizer
