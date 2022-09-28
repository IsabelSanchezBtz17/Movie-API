import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/shared/principal/principal.component';

import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [

  {
    path: 'movie',
    loadChildren: () => import('./components/modules/movie/movie.module').then(m => m.MovieModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./components/modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'tv',
    loadChildren: () => import('./components/modules/tv/tv.module').then(m => m.TvModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: PrincipalComponent,
    canLoad: [AuthGuard],
    canActivate: [AuthGuard]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
