from django.urls import path

from django.conf.urls import include

from rest_framework import routers
from movies.views import MovieViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register(r'movies', MovieViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]