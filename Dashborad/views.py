from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from B_Leads.models import Lead
from django.db.models import Count

# Create your views here.

class DashBoradApiView(APIView):
    def get(self,request):
        from django.db.models import Q
        counts = Lead.objects.aggregate(
            TotalLeads=Count("id"),
            New_Leads=Count("id", filter=Q(status="NEW")),
            WON_Leads=Count("id", filter=Q(status="WON")),
            INTERESTED_Leads=Count("id", filter=Q(status="INTERESTED")),
        )

        return Response(counts)


class DashboardFunnelView(APIView):

 #   permission_classes = [IsAuthenticated]

    def get(self, request):

        funnel = (
            Lead.objects
            .values("status")
            .annotate(total=Count("id"))
        )

        return Response({
            item["status"]: item["total"]
            for item in funnel
            if item["status"] != "LOST"
        })



class DashboardSourcesView(APIView):

    #permission_classes = [IsAuthenticated]

    def get(self, request):

        sources = (
            Lead.objects
            .values("source")
            .annotate(total=Count("id"))
            .order_by("-total")
        )

        return Response({
            item["source"]: item["total"]
            for item in sources
        })