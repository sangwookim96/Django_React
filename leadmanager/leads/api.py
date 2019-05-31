from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead Viewset
# ==> It allows us to create full crud API, read update, and delete without having to
# specify explicit methods for the functionality


class LeadViewSet(viewsets.ModelViewSet):
    # queryset = Lead.objects.all()
    permissions_classes = [
        # permissions.AllowAny    # allow permission to any
        permissions.IsAuthenticated
    ]

    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.leads.all()

    # Allows us to save lead owner when we create a lead
    def perform_create(self, seralizer):
        seralizer.save(owner=self.request.user)
