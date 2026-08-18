from django.contrib import admin
from . import models
# Register your models here.



@admin.register(models.FollowUp)
class FollowupsAdmin(admin.ModelAdmin):
    pass