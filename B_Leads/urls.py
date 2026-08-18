# from rest_framework.routers import SimpleRouter
# from .import views
# from django.urls import path

# router=SimpleRouter()
# router.register("Leads",views.leads,basename='leads')


# urlpatterns=router.urls




from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register("leads", views.LeadViewSet, basename="lead")

urlpatterns = router.urls