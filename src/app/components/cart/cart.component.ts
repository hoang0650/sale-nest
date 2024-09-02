import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface CartItem {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private router: Router) {}
  cartItems: CartItem[] = [
    {
      name: 'Product 1',
      description: 'Description of product 1',
      price: 99.99,
      quantity: 1,
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Product 2',
      description: 'Description of product 2',
      price: 49.99,
      quantity: 2,
      image: 'https://via.placeholder.com/100'
    }
  ];

  increaseQuantity(item: CartItem) {
    item.quantity++;
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  proceedToCheckout() {
    this.router.navigate(['/checkout']);
  }
  
}
