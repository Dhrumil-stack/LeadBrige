from django.urls import path
from . import views

urlpatterns = [
    path("stats/", views.DashBoradApiView.as_view(), name="dashboard-stats"),
    path("funnel/", views.DashboardFunnelView.as_view(), name="dashboard-funnel"),
    path("sources/", views.DashboardSourcesView.as_view(), name="dashboard-sources"),
]