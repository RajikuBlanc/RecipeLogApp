from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework import generics, viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import UserSerializer, RecipeSerializer, SeasoningSerializer
from .models import Recipe, Seasoning


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class ManageUserView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    permission_classes = (AllowAny,)
    authentication_classes = (TokenAuthentication,)
    serializer_class = RecipeSerializer


class SeasoningViewSet(viewsets.ModelViewSet):
    queryset = Seasoning.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = SeasoningSerializer
    authentication_classes = (TokenAuthentication,)