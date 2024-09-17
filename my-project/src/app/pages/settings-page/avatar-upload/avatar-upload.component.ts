import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-avatar-upload',
  standalone: true,
  imports: [],
  templateUrl: './avatar-upload.component.html',
  styleUrl: './avatar-upload.component.scss',
})
export class AvatarUploadComponent {
  preview = signal<string>('assets/images/img.jpg');

  fileBrowserHanler(event: Event) {
    const file = (event.target as HTMLInputElement).files;
    if (!file) return;

    const fileItem = file[0];

    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target?.result) {
        this.preview.set(event.target.result.toString())
      }
    };

    reader.readAsDataURL(fileItem)
  }
}
