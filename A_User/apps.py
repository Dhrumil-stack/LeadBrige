from django.apps import AppConfig


class UserConfig(AppConfig):
    name = 'A_User'

    def ready(self):
        import A_User.signals  # noqa: F401
