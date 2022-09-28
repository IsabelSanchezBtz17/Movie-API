import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.scss']
})
export class FindComponent implements OnInit {
 public original_title: string= '';
 public  homepage: string= '';
 public  overview: string= '';
 public  original_language: string= '';
 public release_date: string= '';
 public flag: boolean= false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      response => {
       console.log(response);
       console.log(response['data'].original_title);
       this.original_title= response['data'].original_title;
       this.homepage= response['data'].homepage;
       this.overview= response['data'].overview;
       this.original_language= response['data'].original_language;
       this.release_date= response['data'].release_date;
      }
    )
  }


  getInformation(){
    this.flag=true;
  }

  recibirMensajedelHijo(evento: boolean){
    this.flag=evento;

  }
}