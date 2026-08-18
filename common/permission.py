from rest_framework.permissions import BasePermission


class IsAdmin(BasePermission):

    def has_permission(self, request, view):
        return(
            request.user and request.user.is_authenticated and request.user.role=='ADMIN'
        )



class IsAgent(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user and request.user.is_authenticated and request.user.role=='AGENT'
        )

class IsAgentORIsAdmin(BasePermission):
    def has_permission(self, request, view):
        return (
            request.user and request.user.is_authenticated and request.user.role in ['AGENT','ADMIN']
        )
    