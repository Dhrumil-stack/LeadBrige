from django.conf import settings
from django.db import models
from common.models import TimeStampedModel

class LeadNote(TimeStampedModel):

    lead = models.ForeignKey(
        "B_Leads.Lead",
        on_delete=models.CASCADE,
        related_name="notes",
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="user",
    )

    note = models.TextField()

    class Meta:
        db_table = "lead_notes"
        ordering = ["-created_at"]
         @action(detail=True,methods=["post"])
            def LeadsNotes(self,request,pk=None):
                lead = self.get_object()
        
                serilizer=LeadsNotesSerilizer(data=request.data)
                serilizer.is_valid(raise_exception=True)
            
                note=serilizer.save(lead=lead,created_by=request.user)
                return Response(serilizer(note).data)
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