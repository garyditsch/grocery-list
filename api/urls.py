from django.conf.urls import include, url 
from rest_framework import routers

from grocery.viewsets import GroceryViewSet

router = routers.DefaultRouter()
router.register(r'grocery', GroceryViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]