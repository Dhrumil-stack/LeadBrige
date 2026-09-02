from django.contrib import admin
from . import models


@admin.register(models.Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'title', 'is_read', 'created_at']
    list_filter = ['is_read', 'created_at']
    search_fields = ['title', 'message', 'user__email']
    readonly_fields = ['created_at', 'updated_at']