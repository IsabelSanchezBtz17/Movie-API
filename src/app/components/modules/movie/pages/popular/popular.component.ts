import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  public name: string= '';
  public description: string= '';
  public movies: any[] =[{
    original_title: ''
  }];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      response => {
       
       console.log(response);
       
       this.name= response['data'].name;
       this.description = response['data'].description;
       this.movies = response['data'].items;

       console.log(response['data'].name);
       console.log(response['data'].description);
       console.log(response['data'].items);
       console.log(response['data'].items[0].original_title);
      }
    )
  }

}
