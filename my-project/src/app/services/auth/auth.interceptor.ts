import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { catchError, switchMap, throwError } from "rxjs";

let isRefreshing: boolean = false

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)
  const token = authService.token
  if (!token) return next(req);

  if (isRefreshing) {
     return refreshAndProcceed(authService, req, next);
  }
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next(addToken(req, token)).pipe(
      catchError((error) => {
        if (error.status === 403) {
          return refreshAndProcceed(authService, req, next);
        }

        return throwError(error);
      })
    );
}


const refreshAndProcceed = (
  authService: AuthService,
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  if (!isRefreshing) {
    isRefreshing = true
    return authService.refreshAuthToken().pipe(
      switchMap((res) => {
        return next(addToken(req, res.access_token));
      })
    );
  }

  return next(addToken(req, authService.token as string));

};

const addToken = (req: HttpRequest<unknown>, token: string) => {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
};
