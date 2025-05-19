from django.urls import path
from .views import MenuItemListView, OrderCreateView, OrderDetailView, MenuItemCreateView

urlpatterns = [
    path('menu/', MenuItemListView.as_view(), name='menu-list'),
    path('menu/add/', MenuItemCreateView.as_view(), name='menu-add'),  # <-- Add this
    path('orders/', OrderCreateView.as_view(), name='order-create'),
    path('orders/<uuid:pk>/', OrderDetailView.as_view(), name='order-detail'),
] 