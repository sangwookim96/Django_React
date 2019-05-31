from django.shortcuts import render


def index(request):
    # takes request and the template 'frontend/index.html'
    return render(request, 'frontend/index.html')
