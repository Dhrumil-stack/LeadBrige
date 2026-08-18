# import django_filters
# from .models import Lead


# class LeadFilter(django_filters.FilterSet):
#     status = django_filters.CharFilter(field_name="status")
#     source = django_filters.CharFilter(field_name="source")

#     class Meta:
#         model = Lead
#         fields = ["status", "source"]



from django_filters.rest_framework import FilterSet
from .models import Lead

class LeadFilter(FilterSet):
    class Meta:
        model=Lead
        fields = ["status", "source"]