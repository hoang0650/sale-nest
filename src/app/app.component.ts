import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // Vô hiệu hóa chuột phải
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
  }

  // Vô hiệu hóa các phím F12 và Ctrl+Shift+I
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
      event.preventDefault();
    }
  }
}

