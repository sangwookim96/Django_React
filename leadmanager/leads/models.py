from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(
        max_length=100, unique=True)  # must be unique email
    # blank=True means optional
    message = models.CharField(max_length=500, blank=True)
    # Track Lead per owner
    owner = models.ForeignKey(
        User, related_name="leads", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(
        auto_now_add=True)    # Add the date automatically
