from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from .models import User

class CoustomUserCreateSerilizer(UserCreateSerializer):

    def validate(self,attrs):
        if attrs['role']=='Agent':
            if not attrs('email').endswith("@asus.com"):
                raise serializers.ValidationError("Email should end with companys email id.")
        return attrs

    def validate_email(self,value):
        if User.objects.filter(email=value):
            raise serializers.ValidationError("Email Already exists.")
        return value

    id=serializers.UUIDField(read_only=True)
    class Meta(UserCreateSerializer.Meta):
        fields=['id','first_name','last_name','email','phone','role','password']



class CoustomUser(UserCreateSerializer):
    
    full_name=serializers.SerializerMethodField()
    
 
    def get_full_name(self,obj):
        return f"{obj.first_name}{obj.last_name}".strip()

    id=serializers.UUIDField(read_only=True)
    class Meta(UserCreateSerializer.Meta):
        fields=['id','full_name','email','phone','role']
