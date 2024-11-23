import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../services/favorites.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container my-4">
      <h2>Mes Favoris</h2>
      <div class="row">
        <div class="col-md-4" *ngFor="let player of favorites">
          <div class="card mb-3">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5 class="mb-0">{{ player.name }}</h5>
              <button class="btn btn-danger btn-sm" (click)="removeFavorite(player.id)">
                <i class="bi bi-trash"></i>
              </button>
            </div>
            <div class="card-body">
              <img [src]="player.photo" [alt]="player.name" class="img-fluid rounded mb-2">
              <p><strong>Position:</strong> {{ player.position }}</p>
              <p><strong>Âge:</strong> {{ player.age }} ans</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FavoritesComponent {
  favorites: Player[] = [];

  constructor(private favoritesService: FavoritesService) {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFavorite(playerId: number) {
    this.favoritesService.removeFavorite(playerId);
    this.favorites = this.favoritesService.getFavorites();
  }
}