from rest_framework.routers import SimpleRouter
from .views import FollowUps

router=SimpleRouter()
router.register("FollowUp",FollowUps,basename="followup")


urlpatterns=router.urls