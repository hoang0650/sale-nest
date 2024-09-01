import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  testimonials = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt pariatur officiis, molestias sit iure sunt voluptatibus.',
      image: 'img/testimonial-1.jpg',
      name: 'Client Name',
      profession: 'Profession',
      rating: 5
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt pariatur officiis, molestias sit iure sunt voluptatibus.',
      image: 'img/testimonial-2.jpg',
      name: 'Client Name',
      profession: 'Profession',
      rating: 5
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt pariatur officiis, molestias sit iure sunt voluptatibus.',
      image: 'img/testimonial-3.jpg',
      name: 'Client Name',
      profession: 'Profession',
      rating: 5
    }
  ]

}
