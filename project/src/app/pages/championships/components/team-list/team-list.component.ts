import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Team } from '../../../../models/team.model';

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" *ngIf="teams.length > 0; else noTeams">
      <div class="card-header">
        <h5 class="mb-0">Équipes</h5>
      </div>
      <div class="card-body">
        <div class="list-group">
          <button *ngFor="let team of teams"
                  class="list-group-item list-group-item-action d-flex align-items-center"
                  (click)="onTeamClick(team)">
            <img [src]="team.logo" [alt]="team.name" class="me-2" style="height: 30px;">
            {{ team.name }}
          </button>
        </div>
      </div>
    </div>
    <ng-template #noTeams>
      <div class="card">
        <div class="card-body text-center">
          <p class="mb-0">Équipe indisponible</p>
        </div>
      </div>
    </ng-template>
  `
})
export class TeamListComponent {
  @Input() teams: Team[] = [];
  @Output() teamSelected = new EventEmitter<Team>();

  onTeamClick(team: Team) {
    this.teamSelected.emit(team);
  }
}