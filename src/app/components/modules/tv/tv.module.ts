import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindTvComponent } from './find-tv/find-tv.component';
import { TvRoutingModule } from './tv-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FindTvComponent 
  ],
  imports: [
    CommonModule,
    TvRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class TvModule { }
