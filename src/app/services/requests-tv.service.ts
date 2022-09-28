

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsTvService {

  constructor(public http: HttpClient) { }

  getProgram(id: string){
    return  this.http.get( 'https://api.themoviedb.org/3/tv/'+id).pipe(
    map((resp: any)=>{
      return {
       name: resp.name,
       description: resp.overview,
       status: resp.status,

      }
    })
    )
    
  }
}


