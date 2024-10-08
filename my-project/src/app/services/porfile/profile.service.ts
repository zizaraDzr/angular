import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { Profile } from "../../data/interfaces/profile_interface";
import { PageAble } from "../../data/interfaces/pageable.interface";
import { map, tap } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiUrl: string = 'https://icherniakov.ru/yt-course';

  me = signal<Profile | null>(null);
  filteredProfiles = signal<Profile[]>([]);

  getTestAccount() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}/account/test_accounts`);
  }
  getAccount(id: string) {
    return this.http.get<Profile[]>(`${this.baseApiUrl}/account/${id}`);
  }

  getMe() {
    return this.http
      .get<Profile>(`${this.baseApiUrl}/account/me`)
      .pipe(tap((res) => this.me.set(res)));
  }

  getSubscribersShowList(subAmount: number = 3) {
    return this.http
      .get<PageAble<Profile>>(`${this.baseApiUrl}/account/subscribers/`)
      .pipe(map((res) => res.items.slice(0, subAmount)));
  }

  patchProfile(profile: Partial<Profile>) {
    return this.http.patch<Profile[]>(`${this.baseApiUrl}/account/me`, profile);
  }
  uploadAvatar(file: File) {
    const fd = new FormData();
    fd.append('image', file);
    return this.http.post<Profile[]>(
      `${this.baseApiUrl}/account/upload_image`,
      fd
    );
  }

  filterProfiles(params: Record<string, any>) {
    return this.http
      .get<PageAble<Profile>>(`${this.baseApiUrl}/account/accounts`, { params })
      .pipe(
        tap(res=>this.filteredProfiles.set(res.items))
      )
  }
}
