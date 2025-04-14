from django.urls import path

from .views import TodoList

urlpatterns = [
    path('', TodoList.as_view(), name='todos_get_post_url'),
]