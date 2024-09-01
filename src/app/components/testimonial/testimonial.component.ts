import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {
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
