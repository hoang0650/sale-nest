import { Component } from '@angular/core';
import { UploadService } from '../../services/upload.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  imageSrc: string | ArrayBuffer | null = null;
  imageId: string | null = null;
  uploadMessage: string = '';
  fetchMessage: string = '';
  inputImageId: string = '';
  constructor(private uploadService: UploadService) { }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.uploadService.uploadImage(file).subscribe(
        response => {
          this.imageId = response.imageId;
          console.log('Image uploaded with ID:', this.imageId);
        },
        error => {
          console.error('Error uploading image', error);
        }
      );
    }
  }

  fetchImage() {
    if (this.imageId) {
      this.uploadService.getImage(this.imageId).subscribe(
        (blob: Blob) => {
          const reader = new FileReader();
          reader.onload = (e: any) => this.imageSrc = e.target.result;
          reader.readAsDataURL(blob);
        },
        error => {
          console.error('Error fetching image', error);
        }
      );
    }
  }

  getImageById() {
    if (this.inputImageId) {
      this.uploadService.getImage(this.inputImageId).subscribe(
        (blob: Blob) => {
          const reader = new FileReader();
          reader.onload = (e: any) => this.imageSrc = e.target.result;
          reader.readAsDataURL(blob);
          this.fetchMessage = 'Image fetched successfully!';
        },
        error => {
          console.error('Error fetching image', error);
          this.fetchMessage = 'Error fetching image. Please try again.';
        }
      );
    }
  }
  
}

