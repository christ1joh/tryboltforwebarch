import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { League } from '../../../../models/league.model';

@Component({
  selector: 'app-league-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-header">
        <h5 class="mb-0">Championnats</h5>
      </div>
      <div class="card-body">
        <h6>Championnats Majeurs</h6>
        <div class="list-group mb-3">
          <button *ngFor="let league of majorLeagues"
                  class="list-group-item list-group-item-action d-flex align-items-center"
                  (click)="onLeagueClick(league)">
            <img [src]="league.logo" [alt]="league.name" class="me-2" style="height: 30px;">
            {{ league.name }}
          </button>
        </div>

        <h6>Championnats CEMAC</h6>
        <div class="list-group">
          <button *ngFor="let league of cemacLeagues"
                  class="list-group-item list-group-item-action d-flex align-items-center"
                  (click)="onLeagueClick(league)">
            <img [src]="league.logo" [alt]="league.name" class="me-2" style="height: 30px;">
            {{ league.name }}
          </button>
        </div>
      </div>
    </div>
  `
})
export class LeagueListComponent {
  @Input() majorLeagues: League[] = [];
  @Input() cemacLeagues: League[] = [];
  @Output() leagueSelected = new EventEmitter<League>();

  onLeagueClick(league: League) {
    this.leagueSelected.emit(league);
  }
}