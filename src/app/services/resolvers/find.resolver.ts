import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class FindResolver implements Resolve<any> {
  constructor (private http: HttpClient){
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
  const url = "https://api.themoviedb.org/3//movie/550";
  return this.http.get(url);
    
  }
}


