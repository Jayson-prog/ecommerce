from django.shortcuts import render, redirect, get_object_or_404
from products.models import Product, Business, Notification
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.contrib import messages
from django.urls import reverse
from products.models import Order
from products.models import Order, Notification, Business
from django.db import models

@login_required
def seller_dashboard(request):
    notifications = Notification.objects.filter(user=request.user, is_read=False)
    orders = Order.objects.filter(product__seller__user=request.user)

    return render(request, "manage_business/seller_dashboard.html", {"orders": orders, "notifications": notifications})

@login_required
def accept_order(request, order_id):
    order = Order.objects.get(id=order_id)
    order.status = "Accepted"
    order.save()
    print(f"Order Accepted by Seller: {request.user.username}")  # Debugging
    print(f"Buyer: {order.buyer.username}")  # Check if buyer is correct
    Notification.objects.create(
        user=order.buyer,
        message=f"Your order for {order.product.product_name} has been accepted."
    )
    return redirect(reverse('manage_business:home'))


def reject_order(request, order_id):
    order = Order.objects.get(id=order_id)
    order.status = "Rejected"
    order.save()

    # Notify buyer
    Notification.objects.create(
        user=order.buyer,
        message=f"Your order for {order.product.product_name} has been rejected."
    )
    return redirect(reverse('manage_business:home'))

def delete_product(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    product.delete()
    return redirect('manage_business:home')






# for seller dashboard graphs
#=========================================================================================
#=========================================================================================

from django.shortcuts import render
from products.models import Product, Sales
from django.utils import timezone
from django.db.models import Sum

def grahp_dashboard(request):
    # Fetch today's sales data for all products
    today_sales = Sales.objects.filter(sale_date=timezone.now().date()).values('product__product_name').annotate(total_sales=Sum('quantity_sold')).order_by('-total_sales')

    # Fetch this month's sales data for all products
    this_month_sales = Sales.objects.filter(sale_date__month=timezone.now().month, sale_date__year=timezone.now().year).values('product__product_name').annotate(total_sales=Sum('quantity_sold')).order_by('-total_sales')

    # Fetch most bought products
    most_bought_products = Sales.objects.values('product').annotate(total_sales=Sum('quantity_sold')).order_by('-total_sales')[:5]  # Top 5 most bought products

    # Prepare data for Chart.js
    daily_sales_data = {
        'labels': [sale['product__product_name'] for sale in today_sales],
        'data': [sale['total_sales'] for sale in today_sales]
    }

    monthly_sales_data = {
        'labels': [sale['product__product_name'] for sale in this_month_sales],
        'data': [sale['total_sales'] for sale in this_month_sales]
    }

    most_bought_products_data = {
        'labels': [Product.objects.get(id=sale['product']).product_name for sale in most_bought_products],
        'data': [sale['total_sales'] for sale in most_bought_products]
    }

    context = {
        'daily_sales_data': daily_sales_data,
        'monthly_sales_data': monthly_sales_data,
        'most_bought_products_data': most_bought_products_data,
    }

    return render(request, 'manage_business/seller_dashboard.html', context)







