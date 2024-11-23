import { Routes } from '@angular/router';
import { ChampionshipsComponent } from './pages/championships/championships.component';
import { AboutComponent } from './pages/about/about.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

export const routes: Routes = [
  { path: '', redirectTo: '/championships', pathMatch: 'full' },
  { path: 'championships', component: ChampionshipsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', redirectTo: '/championships' }
];