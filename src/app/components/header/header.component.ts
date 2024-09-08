import { Component, OnInit,HostListener } from '@angular/core';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0; // Biến để lưu số lượng sản phẩm trong giỏ hàng
  isMobile: boolean = false;
  menuOpen: boolean = false;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItemCount = this.cartService.getTotalItemCount();
    });
    this.checkScreenSize();
  }
   // Lắng nghe thay đổi kích thước màn hình
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  // Kiểm tra kích thước màn hình chỉ khi có `window`
  checkScreenSize(): void {
    if (this.isBrowser()) {
      this.isMobile = window.innerWidth < 768; // Dưới 768px là mobile
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // Kiểm tra nếu đang chạy trên browser
  isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
}
