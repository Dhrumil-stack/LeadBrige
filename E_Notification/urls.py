from rest_framework.routers import SimpleRouter

from E_Notification import views

router=SimpleRouter()
router.register("Noti",views.Notificationtyy,basename='noti')


urlpatterns=router.urls