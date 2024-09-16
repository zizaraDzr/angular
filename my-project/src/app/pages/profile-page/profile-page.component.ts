import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from "../../common-ui/profile-header/profile-header.component";
import { ProfileService } from '../../services/porfile/profile.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { SvgIconComponent } from '../../common-ui/svg/svg-icon.component';
import { RouterLink } from '@angular/router';
import { SubscriderCardComponent } from "../../common-ui/sidebar/subscrider-card/subscrider-card.component";
import { ImgUrlPipe } from "../../helpers/pipes/img-url-pipe";
import { PostFeedComponent } from "./post-feed/post-feed.component";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ProfileHeaderComponent, AsyncPipe, SvgIconComponent, RouterLink, SubscriderCardComponent, ImgUrlPipe, PostFeedComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent {
  profileServivce = inject(ProfileService);
  route = inject(ActivatedRoute);
  me$ = toObservable(this.profileServivce.me);
  subscribers$ = this.profileServivce.getSubscribersShowList(5);

  profile$ = this.route.params.pipe(
    switchMap(({ id }) => {
      if (id === 'me') return this.me$;

      return this.profileServivce.getAccount(id);
    })
  );
}
