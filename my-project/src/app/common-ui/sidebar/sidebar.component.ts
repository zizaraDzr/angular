import { Component, inject } from '@angular/core';
import { SvgIconComponent } from '../svg/svg-icon.component';
import { NgFor, AsyncPipe, JsonPipe } from '@angular/common';
import { SubscriderCardComponent } from './subscrider-card/subscrider-card.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProfileService } from '../../services/porfile/profile.service';
import { firstValueFrom } from 'rxjs';
import { ImgUrlPipe } from "../../helpers/pipes/img-url-pipe";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SvgIconComponent,
    NgFor,
    RouterLink,
    SubscriderCardComponent,
    AsyncPipe,
    JsonPipe,
    ImgUrlPipe,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  profileService: ProfileService = inject(ProfileService);
  me = this.profileService.me;
  subscribers$ = this.profileService.getSubscribersShowList();
  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: 'profile/me',
    },
    {
      label: 'Чаты',
      icon: 'tree',
      link: 'chats',
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search',
    },
  ];

  ngOnInit() {
    firstValueFrom(this.profileService.getMe());
  }
}
