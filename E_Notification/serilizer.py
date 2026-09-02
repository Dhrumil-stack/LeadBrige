from rest_framework import serializers

from .models import Notification


class NotiSerilizer(serializers.ModelSerializer):
    user_email = serializers.CharField(source='user.email', read_only=True)
    user_name = serializers.SerializerMethodField()

    class Meta:
        model = Notification
        fields = [
            'id',
            'user',
            'user_email',
            'user_name',
            'title',
            'message',
            'is_read',
            'created_at',
            'updated_at',
        ]
        read_only_fields = ['id', 'user', 'created_at', 'updated_at']

    def get_user_name(self, obj):
        if obj.user:
            return f"{obj.user.first_name} {obj.user.last_name}".strip()
        return ''


class UpdateNotificationSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['is_read']
        read_only_fields = ['user']
