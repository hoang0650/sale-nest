import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from './services/language.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private languageService: LanguageService) {}

  ngOnInit() {
    // Nếu bạn cần làm gì đó khi ngôn ngữ thay đổi trong AppComponent
    this.languageService.currentLanguage.subscribe(lang => {
      // Có thể thực hiện các tác vụ liên quan đến ngôn ngữ ở đây nếu cần
    });

    if (isPlatformBrowser(this.platformId)) {
      // Vô hiệu hóa chuột phải
      document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });
    }
  }

  // Vô hiệu hóa các phím F12 và Ctrl+Shift+I
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (isPlatformBrowser(this.platformId)) {
      if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
      }
    }
  }

}
