import { Component } from '@angular/core';
interface Message {
  text: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  messages: { sender: string, text: string }[] = [
    { sender: 'Bot', text: 'Hi, how can I help you?' }
  ];
  newMessage: string = '';
  isChatVisible: boolean = false;
  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ sender: 'You', text: this.newMessage });
      this.newMessage = '';

      // Giả lập phản hồi từ bot
      setTimeout(() => {
        this.messages.push({ sender: 'Bot', text: 'This is an automated response.' });
      }, 1000);
    }
  }
  toggleChat() {
    this.isChatVisible = !this.isChatVisible; // Đảo ngược trạng thái hiển thị
  }
}
