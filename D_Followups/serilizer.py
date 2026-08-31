from rest_framework import serializers
from .models import FollowUp
from B_Leads.models import Lead
from A_User.models import User


class FollowUpSeriliuzer(serializers.ModelSerializer):

    lead_name = serializers.CharField(source='lead.name', read_only=True)
    Username = serializers.CharField(source="assigned_to.get_full_name", read_only=True)

    # assigned_to is set automatically by perform_create for agents,
    # so make it not required in the serializer
    assigned_to = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        required=False,
        allow_null=True,
    )

    class Meta:
        model = FollowUp
        fields = "__all__"
        read_only_fields = ["completed_at"]

    def validate_lead(self, value):
        return value

    def validate(self, attrs):
        return attrs

# class FollowUpSeriliuzerUpdate(serializers.ModelSerializer):
      
#       Username=serializers.CharField(source='assigned_to.first_name')
#       class Meta:
#             model=FollowUp
#             fields=["Username","status"]