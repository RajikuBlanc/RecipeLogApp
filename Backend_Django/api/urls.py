from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet, ManageUserView, RecipeViewSet, SeasoningViewSet

router = routers.DefaultRouter()
router.register('recipes', RecipeViewSet)
router.register('users', UserViewSet)
router.register('seasonings', SeasoningViewSet)
urlpatterns = [
    path('myself', ManageUserView.as_view(), name='myself'),
    path('', include(router.urls))
]
