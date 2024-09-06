import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events = [
    {
      id: 1,
      title: 'Khám Phá Quá Trình Làm Tổ Của Chim Yến| Yến Chất',
      description: 'Khám Phá Quá Trình Làm Tổ Của Chim Yến| Yến ChấtNhư chúng ta đã biết, nước bọt của chim yến đã tạo nên tổ yến có chứa nhiều dưỡng chất tốt, được nhiều người lựa chọn làm thực phẩm bổ dưỡng cho gia đình. Nhưng có lẽ quá trình xây dựng và hình thành tổ yến như thế nào và mất bao nhiêu thời gian ít ai quan tâm. Vậy thắc mắc này sẽ được bật mí dưới đây.',
      content: 'Detailed content of event 1',
      image: 'img/blog-1.jpg',
      videoUrl: 'https://www.youtube.com/embed/82I87XWphDM',
      relatedEvents: [2, 3]
    },
    {
      id: 2,
      title: 'Chưng yến đúng cách giữ trọn dinh dưỡng',
      description: 'Video bên dưới đây sẽ hướng dẫn bạn cách chưng yến sao cho đúng cách',
      content: 'Detailed content of event 2',
      image: 'img/blog-2.jpg',
      videoUrl: 'https://www.youtube.com/embed/8x6OiLJO9-U',
      relatedEvents: [1, 3]
    },
    {
      id: 3,
      title: 'Mẹo Nhặt Lông Yến Nhanh Nhất | Quyên Vi Vu',
      description: 'Mẹo nhặt lông yến nhanh nhất mà không bị mất chất',
      content: 'Detailed content of event 3',
      image: 'img/blog-3.jpg',
      videoUrl: 'https://www.youtube.com/embed/aFSOBQZhqhg',
      relatedEvents: [1, 2]
    }
  ];

  getEventById(id: number) {
    return this.events.find(event => event.id === id);
  }

  getRelatedEvents(relatedIds: number[]) {
    return this.events.filter(event => relatedIds.includes(event.id));
  }
}
