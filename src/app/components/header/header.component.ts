import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0; // Biến để lưu số lượng sản phẩm trong giỏ hàng

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItemCount = this.cartService.getTotalItemCount();
    });
  }
}
