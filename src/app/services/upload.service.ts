import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private apiUrl = 'http://localhost:3000/api/upload/image';

  constructor(private http: HttpClient) {}

  uploadImage(imageFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', imageFile);

    return this.http.post(this.apiUrl, formData);
  }

  getImage(imageId: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${imageId}`, { responseType: 'blob' });
  }

  getImageUrl(imageId: string): string {
    return `${this.apiUrl}${imageId}`;
  }
}
