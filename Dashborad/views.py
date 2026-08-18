from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from B_Leads.models import Lead
from django.db.models import Count

# Create your views here.

class DashBoradApiView(APIView):
    def get(self,request):
        TotalLeads=Lead.objects.count()
        New_Leads=Lead.objects.filter(status='NEW').count()
        WON_Leads=Lead.objects.filter(status='WON').count()
        INTERESTED_Leads=Lead.objects.filter(status='INTERESTED').count()
        lost_leads = Lead.objects.filter(status="LOST").count()

        return Response({
            "TotalLeads":TotalLeads,
            "New_Leads":New_Leads,
            "WON_Leads":WON_Leads,
            "INTERESTED_Leads":INTERESTED_Leads,
        })


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