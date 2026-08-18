from django.contrib import admin
from . import models
# Register your models here.



@admin.register(models.LeadNote)

class LeadNoteAdmin(admin.ModelAdmin):
    pass