import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ProfileService } from '../../services/porfile/profile.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  profileService: ProfileService = inject(ProfileService)
  ngOnInit() {
    console.log('onit')
    this.profileService.getMe().subscribe(val => {
      console.log(val)
    })
  }
}
