import { Component, OnInit,HostListener } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { LanguageService } from '../../services/language.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0; // Biến để lưu số lượng sản phẩm trong giỏ hàng
  isMobile: boolean = false;
  menuOpen: boolean = false;
  currentLanguage: string;
  constructor(private cartService: CartService, private languageService: LanguageService,private translate: TranslateService) {
    this.currentLanguage = 'vi'; // Ngôn ngữ mặc định
    this.translate.setDefaultLang(this.currentLanguage);
  }
  ngOnInit(): void {
    // Lắng nghe sự thay đổi ngôn ngữ từ LanguageService
    this.languageService.currentLanguage.subscribe(lang => {
      this.currentLanguage = lang;
      this.translate.use(lang); // Cập nhật ngôn ngữ cho dịch vụ dịch
    });
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

  selectLanguage(language: string): void {
    this.languageService.changeLanguage(language); // Gọi hàm để thay đổi ngôn ngữ
  }

}
