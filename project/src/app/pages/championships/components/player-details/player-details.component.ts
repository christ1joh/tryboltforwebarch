import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../../../models/player.model';
import { FavoritesService } from '../../../../services/favorites.service';

@Component({
  selector: 'app-player-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" *ngIf="player">
      <div class="card-header d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Détails du joueur</h5>
        <button class="btn btn-outline-primary" (click)="addToFavorites()">
          <i class="bi bi-star"></i> Favoris
        </button>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-4">
            <img [src]="player.photo" [alt]="player.name" class="img-fluid rounded">
          </div>
          <div class="col-md-8">
            <h6>Informations personnelles</h6>
            <ul class="list-unstyled">
              <li><strong>Nom:</strong> {{ player.firstname }} {{ player.lastname }}</li>
              <li><strong>Nationalité:</strong> {{ player.nationality }}</li>
              <li><strong>Âge:</strong> {{ player.age }} ans</li>
              <li><strong>Taille:</strong> {{ player.height }}</li>
              <li><strong>Poids:</strong> {{ player.weight }}</li>
            </ul>

            <h6 class="mt-3">Statistiques</h6>
            <ul class="list-unstyled">
              <li><strong>Poste:</strong> {{ player.position }}</li>
              <li><strong>Minutes jouées:</strong> {{ player.statistics.minutes }}</li>
              <li><strong>Buts:</strong> {{ player.statistics.goals }}</li>
              <li><strong>Arrêts:</strong> {{ player.statistics.saves }}</li>
              <li><strong>Cartons jaunes:</strong> {{ player.statistics.yellowCards }}</li>
              <li><strong>Cartons rouges:</strong> {{ player.statistics.redCards }}</li>
              <li><strong>Penalties réussis:</strong> {{ player.statistics.penaltiesScored }}</li>
              <li><strong>Penalties manqués:</strong> {{ player.statistics.penaltiesMissed }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PlayerDetailsComponent {
  @Input() player!: Player;

  constructor(private favoritesService: FavoritesService) {}

  addToFavorites() {
    this.favoritesService.addFavorite(this.player);
  }
}