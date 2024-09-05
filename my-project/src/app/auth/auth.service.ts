import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  baseApiUrl: string = 'https://icherniakov.ru/yt-course/auth/';
  login(payload: { username: string; password: string }) {
    this.http.post(`${this.baseApiUrl}token`, payload)
  }
}
