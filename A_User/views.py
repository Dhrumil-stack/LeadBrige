from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import CoustomUser,CoustomUserCreateSerilizer
from rest_framework.generics import CreateAPIView
from .models import User

class MeAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = CoustomUser(request.user)
        return Response(serializer.data)

class UserCreateAPIView(CreateAPIView):
    permission_classes = [AllowAny]
    queryset=User.objects.all()
    serializer_class=CoustomUserCreateSerilizer
