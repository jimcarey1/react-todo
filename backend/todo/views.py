from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Todo
from .serializers import TodoSerializer

class TodoList(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        serializer = TodoSerializer()