from djoser.serializers import UserCreateSerializer
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import User

class CoustomUserCreateSerilizer(UserCreateSerializer):

    def validate(self,attrs):
        return attrs

    def validate_email(self,value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email Already exists.")
        return value

    id=serializers.UUIDField(read_only=True)
    class Meta(UserCreateSerializer.Meta):
        fields=['id','first_name','last_name','email','phone','role','password']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Remove re_password field added by djoser's UserCreateSerializer
        self.fields.pop('re_password', None)



class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    """Use email as the login field instead of username."""
    username_field = 'email'


class CoustomUser(UserCreateSerializer):
    
    full_name=serializers.SerializerMethodField()
    
 
    def get_full_name(self,obj):
        return f"{obj.first_name}{obj.last_name}".strip()

    id=serializers.UUIDField(read_only=True)
    class Meta(UserCreateSerializer.Meta):
        fields=['id','full_name','email','phone','role']
