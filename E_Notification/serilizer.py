from rest_framework import serializers

from .models import Notification

class NotiSerilizer(serializers.ModelSerializer):
    class Meta:
        model=Notification
        fields='__all__'


class UpdateNotificationSerilizer(serializers.ModelSerializer):
    class Meta:
        model=Notification
        fields=['is_read']
        read_only_fields = ["user"]
