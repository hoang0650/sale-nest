import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router  } from '@angular/router';
import { CartService } from '../../services/cart.service';
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
export class CheckoutComponent implements OnInit {
  constructor(private http: HttpClient, private activetedRoute: ActivatedRoute,private router: Router,private cartService: CartService){}
  cartItems: any[] = [];
  totalPrice: number = 0;
  billingInfo = {
    fullName: '',
    email: '',
    address: '',
    phone: '',
  };

  ngOnInit(): void {
    this.activetedRoute.queryParams.subscribe(params => {
      const cartItemsString = params['cartItems'];
      this.cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
      this.totalPrice = params['totalPrice'] ? parseFloat(params['totalPrice']) : 0;
    });
  }

  placeOrder() {
    // Xử lý khi người dùng nhấn "Place Order"
    alert('Thanh toán thành công!');
    // Xóa tất cả các mặt hàng trong giỏ hàng
    this.cartService.clearCart();

    // Điều hướng đến trang chủ
    this.router.navigate(['/home']);
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
