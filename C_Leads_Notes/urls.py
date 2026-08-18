from rest_framework.routers import SimpleRouter
from .views import LeadsNotes

router=SimpleRouter()
router.register("LeadNote",LeadsNotes,basename="leadNotes")


urlpatterns=router.urls