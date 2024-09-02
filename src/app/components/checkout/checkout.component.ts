import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  constructor(private http: HttpClient, private router: Router){}
  cartItems: CartItem[] = [
    {
      name: 'Product 1',
      price: 99.99,
      quantity: 1
    },
    {
      name: 'Product 2',
      price: 49.99,
      quantity: 2
    }
  ];

  billingInfo = {
    fullName: '',
    email: '',
    address: '',
    city: '',
    country: ''
  };

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  placeOrder() {
    // Xử lý khi người dùng nhấn "Place Order"
    alert('Order placed successfully!');

    // const orderData = {
    //   userId: '12345', 
    //   ID của người dùng hiện tại, có thể lấy từ trạng thái đăng nhập
    //   cartItems: this.cartItems,
    //   billingInfo: this.billingInfo
    // };

    // this.http.post('/api/checkout', orderData).subscribe(
    //   response => {
    //     alert('Order placed successfully!');
    //     this.router.navigate(['/thank-you']); 
    //     Chuyển hướng tới trang cảm ơn
    //   },
    //   error => {
    //     console.error('Error placing order:', error);
    //     alert('Failed to place order. Please try again.');
    //   }
    // );
  }
}
