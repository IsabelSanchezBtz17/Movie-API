import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularComponent } from './pages/popular/popular.component';
import { FindComponent } from './pages/find/find.component';
import { MovieRoutingModule } from './movie-routing.module';
import { InformationComponent } from './pages/information/information.component';
import { ConversionPipe } from '../../libs/pipes/conversion/conversion.pipe';
import { FocusDirective } from '../../libs/focus.directive';



@NgModule({
  declarations: [
    PopularComponent,
    FindComponent,
    InformationComponent,
    ConversionPipe,
    FocusDirective
  ],
  imports: [
    CommonModule,
    MovieRoutingModule 

  ]
})
export class MovieModule { }
