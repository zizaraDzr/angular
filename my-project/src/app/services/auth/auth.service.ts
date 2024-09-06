import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TokenResponse } from '../../data/interfaces/auth_interface';
import { catchError, tap, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http: HttpClient = inject(HttpClient);
  router: Router = inject(Router);
  baseApiUrl: string = 'https://icherniakov.ru/yt-course/auth/';
  cookieService: CookieService = inject(CookieService);

  token: string | null = null;
  refreshToken: string | null = null;

  get isAuth(): boolean {
    if (!this.token) {
      this.token = this.cookieService.get('token');
      this.refreshToken = this.cookieService.get('refreshToken');
    }

    return !!this.token;
  }

  login(payload: { username: string; password: string }) {
    const formData = new FormData();
    formData.append('username', payload.username);
    formData.append('password', payload.password);
    return this.http
      .post<TokenResponse>(`${this.baseApiUrl}token`, formData)
      .pipe(
        tap((val) => {
          this.saveToken(val);
        })
      );
  }

  refreshAuthToken() {
    return this.http
      .post<TokenResponse>(`${this.baseApiUrl}refresh`, {
        refresh_token: this.refreshToken,
      })
      .pipe(
        tap((val) => {
          this.saveToken(val);
        }),
        catchError((err) => {
          this.logout();
          return throwError(err);
        })
      );
  }

  logout() {
    this.cookieService.deleteAll();
    this.token = null;
    this.refreshToken = null;
    this.router.navigate(['/login']);
  }

  saveToken(res: TokenResponse) {
    this.token = res.access_token;
    this.refreshToken = res.refresh_token;
    this.cookieService.set('token', this.token);
    this.cookieService.set('refreshToken', this.refreshToken);
  }
}
