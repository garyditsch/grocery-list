# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grocery', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groceryitem',
            name='created_date',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='groceryitem',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=8),
        ),
    ]
