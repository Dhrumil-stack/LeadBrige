from rest_framework import serializers
from .models import FollowUp

class FollowUpSeriliuzer(serializers.ModelSerializer):

      lead_name = serializers.CharField(source='lead.name', read_only=True)
      Username=serializers.CharField(source="assigned_to.get_full_name")

      def validate_assigned_to(self,value):
            if value.role!='AGENT':
                  raise serializers.ValidationError("FolllowUp cannot assign to admin")

            return value
      
      class Meta:
                  model=FollowUp
                  fields="__all__"

# class FollowUpSeriliuzerUpdate(serializers.ModelSerializer):
      
#       Username=serializers.CharField(source='assigned_to.first_name')
#       class Meta:
#             model=FollowUp
#             fields=["Username","status"]