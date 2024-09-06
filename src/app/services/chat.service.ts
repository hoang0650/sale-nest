import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Message } from '../interfaces/message';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:3000/api/webhook/send-message';
  private messagesSubject = new Subject<Message>();

  constructor(private http: HttpClient) {}

  // Gửi tin nhắn đến server (có thể là API của bạn)
  sendMessage(recipientId: string, messageText: string) {
    return this.http.post(this.apiUrl, {
      recipientId,
      messageText
    });
  }

  // Nhận tin nhắn từ server (lắng nghe tin nhắn mới)
  getMessages(): Observable<Message> {
    return this.messagesSubject.asObservable();
  }

  // Giả lập nhận tin nhắn từ server (thay đổi theo nhu cầu)
  receiveMessage(message: Message) {
    this.messagesSubject.next(message);
  }
}
