import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CoreComponent } from './core.component';
import { AuthenticationGuard } from './@services/authentication.guard';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then((m) => m.AboutModule),
      },
    ],
  },
  {
    path: 'login',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
