import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from '../../common-ui/profile-card/profile-card.component';
import { Profile } from '../../data/interfaces/profile_interface';
import { ProfileService } from '../../services/porfile/profile.service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPageComponent {
  profileService = inject(ProfileService);
  profiles: Profile[] = [];

  constructor() {
    this.profileService.getTestAccount().subscribe((val) => {
      this.profiles = val;
    });
  }
}
