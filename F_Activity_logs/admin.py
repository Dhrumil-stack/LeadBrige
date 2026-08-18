from django.contrib import admin
from . import models
# Register your models here.



@admin.register(models.ActivityLog)

class ActivityLogAdmin(admin.ModelAdmin):
    pass