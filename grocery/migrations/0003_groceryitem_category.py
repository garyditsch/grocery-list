# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('grocery', '0002_auto_20161012_2140'),
    ]

    operations = [
        migrations.AddField(
            model_name='groceryitem',
            name='category',
            field=models.CharField(max_length=50, blank=True, default='misc'),
        ),
    ]
