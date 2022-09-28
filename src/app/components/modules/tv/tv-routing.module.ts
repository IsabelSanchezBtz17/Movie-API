import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindTvComponent } from './find-tv/find-tv.component';

const routes: Routes =[
  {
    path:'',
    component : FindTvComponent 
  }

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TvRoutingModule { }
