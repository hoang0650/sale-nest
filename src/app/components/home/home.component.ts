import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  testimonials = [
    {
      name: 'Nguyễn Văn A',
      quote: '"Quality product, right for the price."',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Nguyễn Văn B',
      quote: '"The bird\'s nest is clean and delicious, my health has improved after use."',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Nguyễn Văn C',
      quote: '"Enthusiastic staff, very good advice."',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Nguyễn Văn D',
      quote: '"The quality of the product and the service are very good."',
      image: 'https://via.placeholder.com/150'
    }
  ];

}
