from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views

urlpatterns = [
    path('api/auth', include('knox.urls')),
    # register path
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    # Log-out: make a token is invalidated (destroy it in back-end).
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')
]
