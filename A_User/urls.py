from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

from .views import MeAPIView,UserCreateAPIView
from . import views

urlpatterns=[
    path("login/",TokenObtainPairView.as_view(),name="login"),
    path("refresh/",TokenRefreshView.as_view(),name="refresh"),
    path("me/",MeAPIView.as_view(),name="me"),
    path("user/",UserCreateAPIView.as_view(),name="user-create"),
]
