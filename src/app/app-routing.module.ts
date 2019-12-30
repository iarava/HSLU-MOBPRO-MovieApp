import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'suche', loadChildren: './pages/suche/suche.module#SuchePageModule' },
  { path: 'movies/:id', loadChildren: './pages/film-details/film-details.module#FilmDetailsPageModule' },
  { path: 'native', loadChildren: './pages/native/native.module#NativePageModule' },
  { path: 'favorits', loadChildren: './pages/favorits/favorits.module#FavoritsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
