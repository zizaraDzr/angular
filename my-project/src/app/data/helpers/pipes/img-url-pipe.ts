import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgUrl',
  standalone: true,
})
export class ImgUrlPipe implements PipeTransform {
  transform(url: string | null): string | null {
    if (!url) return null
    return `https://icherniakov.ru/yt-course/${url}`;
  }
}
