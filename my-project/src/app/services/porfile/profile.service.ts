import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Profile } from "../../data/interfaces/profile_interface";

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiUrl:string = 'https://icherniakov.ru/yt-course';

  getTestAccount() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}/account/test_accounts`);
  }

  getMe() {
    return this.http.get<Profile>(`${this.baseApiUrl}/account/me`);
  }
}
