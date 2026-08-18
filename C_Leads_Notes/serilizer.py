from rest_framework import serializers
from .models import LeadNote
from A_User.models import User

class LeadNotex(serializers.ModelSerializer):
    LeadName=serializers.CharField(source='lead.name')
    Username=serializers.CharField(source='user.first_name')
    
    class Meta:
        model=LeadNote
        fields='__all__'