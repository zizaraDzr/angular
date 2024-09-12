import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg[icon]',
  standalone: true,
  template: `<svg:use [attr.href]='href'></svg:use>`,
  styles: ['']
})
export class SvgIconComponent {
  @Input() icon: string = ''


  get href() {
    return `/assets/svg/chat.svg#${this.icon}`;
  }
}
