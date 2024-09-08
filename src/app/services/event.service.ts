import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events = [
    {
      id: 1,
      title: 'Tổ Yến Nguyên Chất – Chất Lượng Từ Tự Nhiên',
      description: 'Bạn đang tìm kiếm một sản phẩm thiên nhiên quý giá, bổ dưỡng và an toàn cho sức khỏe? Tổ yến nguyên chất từ nhà yến của chúng tôi chính là sự lựa chọn hoàn hảo.<br>Tại Yến Sào Thanh Bình, chúng tôi sở hữu hệ thống nhà yến đạt chuẩn, nằm ở những khu vực tự nhiên, trong lành, giúp đàn chim yến có môi trường sống tốt nhất để làm tổ. Quá trình thu hoạch tổ yến được thực hiện tỉ mỉ, cẩn thận, đảm bảo tổ yến giữ được chất lượng cao nhất, không ảnh hưởng đến chim mẹ và chim con. Sau khi thu hoạch, tổ yến được xử lý và làm sạch hoàn toàn bằng tay, không hóa chất, không chất bảo quản. Điều này giúp tổ yến giữ nguyên giá trị dinh dưỡng tự nhiên, bao gồm 18 loại axit amin thiết yếu và nhiều khoáng chất quan trọng cho cơ thể. Tổ yến không chỉ giúp bồi bổ sức khỏe mà còn hỗ trợ làm đẹp da, tăng cường hệ miễn dịch, và giúp bạn có giấc ngủ ngon hơn.Sản phẩm tổ yến của chúng tôi được đóng gói cẩn thận, sang trọng, phù hợp để làm quà tặng sức khỏe cho người thân và đối tác. Đặc biệt, hiện tại chúng tôi đang có chương trình khuyến mãi với ưu đãi hấp dẫn khi mua từ 200 gram trở lên. Hãy liên hệ ngay với chúng tôi qua số điện thoại: 0972603267 hoặc truy cập fanpage/website để được tư vấn, đặt hàng và tận hưởng sản phẩm tổ yến chất lượng nhất. Chúng tôi cam kết mang đến cho bạn sản phẩm yến sào nguyên chất, an toàn và tốt nhất cho sức khỏe của bạn và gia đình. Tổ yến nguyên chất – Món quà từ thiên nhiên, bảo vệ sức khỏe bền vững.',
      content: 'Detailed content of event 1',
      image: 'images/logoyensao.jpg',
      videoUrl: 'https://www.youtube.com/embed/dYjkOV52IVU',
      relatedEvents: [2, 3, 4]
    },
    {
      id: 2,
      title: 'Khám Phá Quá Trình Làm Tổ Của Chim Yến| Yến Chất',
      description: 'Khám Phá Quá Trình Làm Tổ Của Chim Yến| Yến ChấtNhư chúng ta đã biết, nước bọt của chim yến đã tạo nên tổ yến có chứa nhiều dưỡng chất tốt, được nhiều người lựa chọn làm thực phẩm bổ dưỡng cho gia đình. Nhưng có lẽ quá trình xây dựng và hình thành tổ yến như thế nào và mất bao nhiêu thời gian ít ai quan tâm. Vậy thắc mắc này sẽ được bật mí dưới đây.',
      content: 'Detailed content of event 2',
      image: 'images/logoyensao.jpg',
      videoUrl: 'https://www.youtube.com/embed/82I87XWphDM',
      relatedEvents: [1, 3, 4]
    },
    {
      id: 3,
      title: 'Chưng yến đúng cách giữ trọn dinh dưỡng',
      description: 'Video bên dưới đây sẽ hướng dẫn bạn cách chưng yến sao cho đúng cách',
      content: 'Detailed content of event 3',
      image: 'images/logoyensao.jpg',
      videoUrl: 'https://www.youtube.com/embed/8x6OiLJO9-U',
      relatedEvents: [1, 2, 4]
    },
    {
      id: 4,
      title: 'Mẹo Nhặt Lông Yến Nhanh Nhất | Quyên Vi Vu',
      description: 'Mẹo nhặt lông yến nhanh nhất mà không bị mất chất',
      content: 'Detailed content of event 4',
      image: 'images/logoyensao.jpg',
      videoUrl: 'https://www.youtube.com/embed/aFSOBQZhqhg',
      relatedEvents: [1, 2, 3]
    }
  ];

  getEventById(id: number) {
    return this.events.find(event => event.id === id);
  }

  getRelatedEvents(relatedIds: number[]) {
    return this.events.filter(event => relatedIds.includes(event.id));
  }
}
