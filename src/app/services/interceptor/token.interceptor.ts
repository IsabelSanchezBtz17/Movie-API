import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const TOKEN: string = this.authService.token;

    const HEADER_REQUEST: HttpRequest<any> = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${TOKEN}`),
      params: (request.params ? request.params : new HttpParams()).set('api_key', TOKEN)
    })
    
    return next.handle(HEADER_REQUEST);
    
  }
}