from rest_framework.routers import SimpleRouter
from .views import ActivityLogs

router=SimpleRouter()
router.register("ActivityLogs",ActivityLogs,basename="ActivityLogs")


urlpatterns=router.urls