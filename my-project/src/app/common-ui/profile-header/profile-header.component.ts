import { Component, Input } from '@angular/core';
import { Profile } from '../../data/interfaces/profile_interface';
import { ImgUrlPipe } from "../../helpers/pipes/img-url-pipe";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [ImgUrlPipe, RouterLink],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss',
})
export class ProfileHeaderComponent {
  @Input() profile: any;
}
