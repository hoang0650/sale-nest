import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  testimonials = [
    {
      text: 'Sản phẩm tốt, giá cả hợp lý.',
      image: 'https://via.placeholder.com/150',
      name: 'Hà Nguyễn',
      profession: 'Thái Bình',
      rating: 5
    },
    {
      text: 'Tôi rất thích sử dụng sản phẩm tại Yến sào Thanh Bình.',
      image: 'https://via.placeholder.com/150',
      name: 'Hoàng Nguyễn',
      profession: 'Hồ Chí Minh',
      rating: 5
    },
    {
      text: 'Tôi rất thích cách phục vụ chuyên nghiệp và giao hàng nhanh chóng.',
      image: 'https://via.placeholder.com/150',
      name: 'Minh Nguyễn',
      profession: 'Dĩ An',
      rating: 5
    }
  ]

}
