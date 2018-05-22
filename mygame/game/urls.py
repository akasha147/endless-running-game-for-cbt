from django.urls import path

from . import views

from django.contrib.staticfiles.urls import staticfiles_urlpatterns



urlpatterns = [
   
   
    path('play', views.render_game, name='render'),
    
]

urlpatterns +=staticfiles_urlpatterns()