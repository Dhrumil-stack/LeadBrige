from django.contrib import admin
from . import models
# Register your models here.



@admin.register(models.Lead)

class LeadAdmin(admin.ModelAdmin):
    pass