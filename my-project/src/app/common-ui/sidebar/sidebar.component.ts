import { Component, inject } from '@angular/core';
import { SvgIconComponent } from '../svg/svg-icon.component';
import { NgFor, AsyncPipe } from '@angular/common';
import { SubscriderCardComponent } from './subscrider-card/subscrider-card.component';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../services/porfile/profile.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SvgIconComponent,
    NgFor,
    RouterLink,
    SubscriderCardComponent,
    AsyncPipe,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  profileService: ProfileService = inject(ProfileService);

  subscribers$ = this.profileService.getSubscribersShowList();
  menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: '',
    },
    {
      label: 'Чаты',
      icon: 'tree',
      link: '',
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: '',
    },
  ];
}
