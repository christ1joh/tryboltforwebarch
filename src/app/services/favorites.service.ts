import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: Player[] = [];
  private favoritesCount = new BehaviorSubject<number>(0);

  favoritesCount$ = this.favoritesCount.asObservable();

  addFavorite(player: Player) {
    if (!this.favorites.find(p => p.id === player.id)) {
      this.favorites.push(player);
      this.favoritesCount.next(this.favorites.length);
    }
  }

  getFavorites(): Player[] {
    return this.favorites;
  }

  removeFavorite(playerId: number) {
    this.favorites = this.favorites.filter(p => p.id !== playerId);
    this.favoritesCount.next(this.favorites.length);
  }
}