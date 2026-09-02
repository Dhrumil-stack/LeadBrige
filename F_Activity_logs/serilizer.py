from rest_framework import serializers
from .models import ActivityLog


class ActivitySerilizer(serializers.ModelSerializer):
    user_name = serializers.SerializerMethodField()

    class Meta:
            model=ActivityLog
            fields='__all__'

    def get_user_name(self, obj):
        if obj.user:
            full_name = f"{obj.user.first_name} {obj.user.last_name}".strip()
            return full_name if full_name else obj.user.email
        return None