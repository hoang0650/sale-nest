import { Component } from '@angular/core';
import { Message } from '../../interfaces/message';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']  // Sửa lại `styleUrl` thành `styleUrls`
})
export class FooterComponent {
  messages: Message[] = [
    { sender: 'Bot', text: 'Xin chào! Chúng tôi rất vui được hỗ trợ bạn. Bạn cần giúp đỡ gì ạ?', link:'',displayText:'' }
  ];
  newMessage: string = '';
  isChatVisible: boolean = false;

  // Hàm gửi tin nhắn
  sendMessage() {
    if (this.newMessage.trim() !== '') {
      // Thêm tin nhắn của người dùng vào danh sách
      this.messages.push({ sender: 'You', text: this.newMessage });
      this.newMessage = '';

      // Giả lập phản hồi từ bot sau 1 giây
      setTimeout(() => {
        this.messages.push({ sender: 'Bot', text: 'Bạn có thể liên hệ trực tiếp qua:' });
        this.messages.push({ sender: 'Bot', link: 'https://www.facebook.com/profile.php?id=61564932779639', displayText: 'Fanpage của chúng tôi' });
        this.messages.push({ sender: 'Bot', text: 'hoặc số điện thoại: 0972603267 để được hỗ trợ tư vấn.' });
      }, 1000);
    }
  }

  // Hàm để ẩn/hiện khung chat
  toggleChat() {
    this.isChatVisible = !this.isChatVisible;
  }
}
