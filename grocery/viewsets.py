from rest_framework import viewsets
from .models import GroceryItem
from .serializers import GrocerySerializer

class GroceryViewSet(viewsets.ModelViewSet):
    queryset = GroceryItem.objects.all()
    serializer_class = GrocerySerializer