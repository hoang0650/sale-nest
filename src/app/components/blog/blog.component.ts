import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.events = this.eventService.events;
  }

  selectEvent(eventId: number) {
    // Điều hướng tới trang chi tiết sự kiện
    this.router.navigate(['/blog-detail', eventId]);
  }
}
