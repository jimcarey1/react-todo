from django.db import models

from user.models import User
# Create your models here.
class Todo(models.Model):
    user = models.ForeignKey(User, related_name='todos', on_delete=models.CASCADE)
    name = models.CharField(max_length=100, unique=True)
    isCompleted = models.BooleanField(default=False)

    class Meta:
        db_table = 'todos'