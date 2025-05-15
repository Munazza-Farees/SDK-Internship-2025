from django.db import migrations

def create_sample_menu_items(apps, schema_editor):
    MenuItem = apps.get_model('core', 'MenuItem')
    MenuItem.objects.create(
        name='Margherita Pizza',
        description='Classic cheese and tomato pizza',
        price=199.00,
        category='main_course',
        status='available',
    )
    MenuItem.objects.create(
        name='French Fries',
        description='Crispy golden fries',
        price=99.00,
        category='appetizer',
        status='available',
    )
    MenuItem.objects.create(
        name='Chocolate Shake',
        description='Rich chocolate milkshake',
        price=120.00,
        category='drink',
        status='available',
    )
    MenuItem.objects.create(
        name='Gulab Jamun',
        description='Sweet Indian dessert',
        price=80.00,
        category='dessert',
        status='available',
    )

class Migration(migrations.Migration):
    dependencies = [
        ('core', '0001_initial'),
    ]
    operations = [
        migrations.RunPython(create_sample_menu_items),
    ] 