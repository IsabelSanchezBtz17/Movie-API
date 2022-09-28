
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindResolver } from 'src/app/services/resolvers/find.resolver';
import { PopularResolver } from 'src/app/services/resolvers/popular.resolver';
import { NotFoundComponent } from '../../shared/not-found/not-found.component';
import { FindComponent } from './pages/find/find.component';
import { PopularComponent } from './pages/popular/popular.component';


const routes: Routes =[
  {
    path:'',
    children: [
      {
        path: 'popular',
        component: PopularComponent,
        resolve:{
          data: PopularResolver
        }
      },
      {
        path: 'find',
        component: FindComponent,
        resolve:{
          data: FindResolver
        }
      },
      {
        path: '**',
        component: NotFoundComponent
       
      },

    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
