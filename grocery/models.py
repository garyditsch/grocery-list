from django.db import models

# Create your models here.

class GroceryItem(models.Model):
    name = models.CharField(max_length=50)
    quantity = models.IntegerField(blank=True)
    created_date = models.DateField(auto_now_add=True)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    category = models.CharField(max_length=50, blank=True, default='misc')

    def __str__(self):
        return self.name