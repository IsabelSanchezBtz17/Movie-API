import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestsTvService } from 'src/app/services/requests-tv.service';

@Component({
  selector: 'app-find-tv',
  templateUrl: './find-tv.component.html',
  styleUrls: ['./find-tv.component.scss']
})
export class FindTvComponent  implements OnInit{

  public formtv!: FormGroup;
  public name: string='';
  public status: string='';
  public description: string='';

constructor(public requestsService: RequestsTvService){}

ngOnInit(): void {
  this.formtv= new FormGroup({
    id: new FormControl('', [Validators.required] ),  
  }); 
  
}

findProgram(){
  
  this.requestsService.getProgram(this.formtv.get('id')?.value).subscribe({
    next: (resp: any )=>{
    this.name=resp.name;
    this.status= resp.status;
    this.description= resp.description;
      console.log(resp);
    },
    error: (error: any)=>{
      console.log(error);
    }
  });
 }
 
 }
