import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Player } from '../../../../models/player.model';

@Component({
  selector: 'app-player-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="card mb-3" *ngIf="players.length > 0; else noPlayers">
      <div class="card-header">
        <h5 class="mb-0">Joueurs</h5>
        <div class="mt-2">
          <input type="text"
                 class="form-control"
                 placeholder="Rechercher un joueur..."
                 [(ngModel)]="searchTerm"
                 (input)="filterPlayers()">
        </div>
      </div>
      <div class="card-body">
        <div class="list-group">
          <button *ngFor="let player of filteredPlayers"
                  class="list-group-item list-group-item-action"
                  (click)="onPlayerClick(player)">
            {{ player.name }} - {{ player.position }} ({{ player.age }} ans)
          </button>
        </div>
      </div>
    </div>
    <ng-template #noPlayers>
      <div class="card">
        <div class="card-body text-center">
          <p class="mb-0">Joueur indisponible</p>
        </div>
      </div>
    </ng-template>
  `
})
export class PlayerListComponent {
  @Input() players: Player[] = [];
  @Output() playerSelected = new EventEmitter<Player>();

  searchTerm: string = '';
  filteredPlayers: Player[] = [];

  ngOnChanges() {
    this.filterPlayers();
  }

  filterPlayers() {
    if (!this.searchTerm) {
      this.filteredPlayers = this.players;
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredPlayers = this.players.filter(player => 
      player.name.toLowerCase().includes(term) || 
      player.position.toLowerCase().includes(term)
    );

    if (this.filteredPlayers.length === 0) {
      console.log('Aucun joueur trouvé, effectuez une autre recherche');
    }
  }

  onPlayerClick(player: Player) {
    this.playerSelected.emit(player);
  }
}