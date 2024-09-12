import { Component, inject, Input } from '@angular/core';
import { Profile } from '../../../data/interfaces/profile_interface';
import { ImgUrlPipe } from "../../../helpers/pipes/img-url-pipe";
import { ProfileService } from '../../../services/porfile/profile.service';

@Component({
  selector: 'app-subscrider-card',
  standalone: true,
  imports: [ImgUrlPipe],
  templateUrl: './subscrider-card.component.html',
  styleUrl: './subscrider-card.component.scss',
})
export class SubscriderCardComponent {
  @Input() profile: any = [];
}
