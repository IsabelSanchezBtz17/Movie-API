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


export class PopularResolver implements Resolve<any> {
  constructor (private http: HttpClient){
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const URL = `https://api.themoviedb.org/3/list/5`;
  return this.http.get(URL);
    
  }
}


