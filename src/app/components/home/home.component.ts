import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  testimonials = [
    {
      name: 'Alice Johnson',
      quote: 'An amazing stay with exceptional service!',
      image: 'https://randomuser.me/api/portraits/women/3.jpg'
    },
    {
      name: 'Bob Smith',
      quote: 'Luxury and comfort combined. Highly recommended!',
      image: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
      name: 'Carol White',
      quote: 'A delightful experience from start to finish.',
      image: 'https://randomuser.me/api/portraits/women/4.jpg'
    }
  ];

}
