from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import Recipe, Seasoning
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {
            'username': {'write_only': True, 'required': True},
            'password': {'write_only': True, 'required': True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class RecipeSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format='%Y-%M-%d %H:%M', read_only=True)
    updated_at = serializers.DateTimeField(format='%Y-%M-%d %H:%M', read_only=True)

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'memo', 'seasoning', 'created_at', 'updated_at']


class SeasoningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seasoning
        fields = ['id', 'name', 'measure']
