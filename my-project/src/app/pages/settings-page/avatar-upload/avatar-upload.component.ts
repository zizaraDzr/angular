import { Component, signal } from '@angular/core';
import { DndDirective } from '../../../common-ui/directives/dnd.directive';

@Component({
  selector: 'app-avatar-upload',
  standalone: true,
  imports: [DndDirective],
  templateUrl: './avatar-upload.component.html',
  styleUrl: './avatar-upload.component.scss',
})
export class AvatarUploadComponent {
  preview = signal<string>('assets/images/img.jpg');
  avatar: File | null = null

  onFileDroped(file: File) {
    this.processFile(file);
  }
  processFile(file: File | null) {
    if (!file) return;

    const fileItem = file;

    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target?.result) {
        this.preview.set(event.target.result.toString());
      }
    };

    reader.readAsDataURL(fileItem);
    this.avatar = file
  }

  fileBrowserHanler(event: Event) {
    const file = (event.target as HTMLInputElement)?.files;
    if (file) {
      this.processFile(file[0]);
    }
  }
}
