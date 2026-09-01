from django.db.models.signals import post_migrate
from django.dispatch import receiver
from django.contrib.auth import get_user_model


@receiver(post_migrate)
def create_default_admin(sender, **kwargs):
    """Create a default admin user after migrations."""
    User = get_user_model()

    if not User.objects.filter(email="dk@admin.com").exists():
        User.objects.create_superuser(
            email="dk@admin.com",
            password="dk@admin.com",
            first_name="DK",
            last_name="Admin",
            role="ADMIN",
        )
