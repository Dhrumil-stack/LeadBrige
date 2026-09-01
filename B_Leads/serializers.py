from rest_framework import serializers
from .models import Lead
from A_User.models import User
from C_Leads_Notes.models import LeadNote

class LeadSerializer(serializers.ModelSerializer):

    created_by_name = serializers.SerializerMethodField()
    assigned_to_name = serializers.SerializerMethodField()

    def get_created_by_name(self, obj):
        if obj.created_by:
            return f"{obj.created_by.first_name} {obj.created_by.last_name}"
        return None

    def get_assigned_to_name(self, obj):
        if obj.assigned_to:
            return f"{obj.assigned_to.first_name} {obj.assigned_to.last_name}"
        return None

    def validate_phone(self,value):
        if not value.isdigit():
            raise serializers.ValidationError("Phone should contain number ONLY")

        if len(value)!=10:
            raise serializers.ValidationError("Phone should contain 10 digit.")

        return value

    class Meta:
        model = Lead
        fields = "__all__"



class LeadAssignSerializer(serializers.Serializer):

    agent_id = serializers.IntegerField()

    def validate_agent_id(self, value):
        try:
            agent = User.objects.get(
                id=value,
                role="AGENT"
            )
        except User.DoesNotExist:
            raise serializers.ValidationError(
                "Agent not found."
            )

        return agent

# notes,user

class LeadsNotesSerilizer(serializers.ModelSerializer):

    # created_by_name=serializers.SerializerMethodField(read_only=True)
    # def get_created_by_name(self, obj):
    #     if obj.created_by:
    #         return obj.created_by.get_full_name()
    #     return None
    
    created_by_name=serializers.CharField(source='user.get_full_name()',read_only=True)

    class Meta:
        model=LeadNote
        fields="__all__"