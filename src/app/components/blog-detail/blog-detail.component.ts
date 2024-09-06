import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  selectedEvent: any = null;
  relatedEvents: any[] = [];

  constructor(private route: ActivatedRoute, private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    // Lấy ID từ URL
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedEvent = this.eventService.getEventById(eventId);
    if (this.selectedEvent) {
      this.relatedEvents = this.eventService.getRelatedEvents(this.selectedEvent.relatedEvents);
    }
  }

  selectEvent(eventId: number) {
    // Điều hướng đến trang chi tiết của sự kiện khác
    this.router.navigate(['/blog-detail', eventId]);
  }

  goBack() {
    window.history.back();
  }
}
