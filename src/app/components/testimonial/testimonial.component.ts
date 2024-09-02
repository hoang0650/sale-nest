import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {
  testimonials = [
    {
      text: 'Sản phẩm tốt, giá cả hợp lý.',
      image: 'img/testimonial-1.jpg',
      name: 'Client Name',
      profession: 'Profession',
      rating: 5
    },
    {
      text: 'Tôi rất thích sử dụng sản phẩm tại Yến sào Thanh Bình.',
      image: 'img/testimonial-2.jpg',
      name: 'Client Name',
      profession: 'Profession',
      rating: 5
    },
    {
      text: 'Tôi rất thích cách phục vụ chuyên nghiệp và giao hàng nhanh chóng.',
      image: 'img/testimonial-3.jpg',
      name: 'Client Name',
      profession: 'Profession',
      rating: 5
    }
  ]
}
