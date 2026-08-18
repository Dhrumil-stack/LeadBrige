from djoser.serializers import UserCreateSerializer
from rest_framework import serializers

class CoustomUserCreateSerilizer(UserCreateSerializer):

    def validate(self,attrs):
        if attrs['role']=='AGENT':
            if not attrs['email'].endswith("@asus.com"):
                raise serializers.ValidationError("Email should end with company email id ")

        return attrs

    class Meta(UserCreateSerializer.Meta):
        fields=['first_name','last_name','email','phone','role','password']



class CoustomUser(UserCreateSerializer):


    full_name=serializers.SerializerMethodField(method_name='get_full_name')
    
    def validate(self,attrs):
        if attrs['role']=='AGENT':
            if not attrs['email'].endswith("@asus.com"):
                raise serializers.ValidationError("Email should end with company email id ")

        return attrs
    @property
    def get_full_name(self,obj):
        return f"{obj.first_name} {obj.last_name}".strip()
    
    
    class Meta(UserCreateSerializer.Meta):
        fields=['full_name','email','phone','role','password']
from rest_framework import serializers
from .models import Lead
from A_User.serializers import CoustomUser

# class UserSerilize(serializers.Serializer):


class LeadSerializer(serializers.ModelSerializer):
    created_by_name=serializers.CharField(source="CoustomUser.get_full_name",read_only=True,allow_null=True)
    assigned_to_name=serializers.CharField(source="CoustomUser.get_full_name",read_only=True,allow_null=True)
    
    class Meta:
        model=Lead
        fields='__all__'
      #  fields=['name','phone','email','created_by_name','assigned_to_name','company_name','source']


     # assigned_to created_by

     from django.conf import settings
from django.db import models

from common.models import TimeStampedModel
from A_User.models import User


from common.choices import (
    LeadSource,
    LeadStatus,
    ServiceInterest,
)


class Lead(TimeStampedModel):
    name = models.CharField(max_length=255)

    phone = models.CharField(
        max_length=20,
        db_index=True,
    )

    email = models.EmailField(
        blank=True,
        null=True,
    )

    company_name = models.CharField(
        max_length=255,
        blank=True,
    )

    source = models.CharField(
        max_length=30,
        choices=LeadSource.choices,
    )

    service_interest = models.CharField(
        max_length=50,
        choices=ServiceInterest.choices,
    )

    status = models.CharField(
        max_length=30,
        choices=LeadStatus.choices,
        default=LeadStatus.NEW,
        db_index=True,
    )

    deal_value = models.DecimalField(
        max_digits=12,
        decimal_places=2,
        default=0,
    )

    assigned_to = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name="assigned_leads",
        null=True,
        blank=True,
    )

    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name="created_leads",
        null=True,
    )

    next_followup_at = models.DateTimeField(
        null=True,
        blank=True,
    )

    class Meta:
        db_table = "leads"
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["status"]),
            models.Index(fields=["source"]),
        ]

    def __str__(self):
        return self.name


