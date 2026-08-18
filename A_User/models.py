from django.contrib.auth.models import AbstractUser
from django.db import models

from common.choices import UserRole
from .manager import UserManager

class User(AbstractUser):
    username = None

    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)

    
    email = models.EmailField(
        unique=True,
        db_index=True,
    )

    phone = models.CharField(
        max_length=20,
        blank=True,
        null=True,
    )

    role = models.CharField(
        max_length=20,
        choices=UserRole.choices,
        default=UserRole.AGENT,
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []


    objects = UserManager()

    class Meta:
        db_table = "users"

    def __str__(self):
        return self.email