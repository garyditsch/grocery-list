# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GroceryItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, verbose_name='ID', serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('quantity', models.IntegerField(blank=True)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('price', models.IntegerField(blank=True)),
            ],
        ),
    ]
