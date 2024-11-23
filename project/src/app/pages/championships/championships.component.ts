import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerDetailsComponent } from './components/player-details/player-details.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { FootballService } from '../../services/football.service';
import { League } from '../../models/league.model';
import { Team } from '../../models/team.model';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-championships',
  standalone: true,
  imports: [
    CommonModule,
    LeagueListComponent,
    TeamListComponent,
    PlayerListComponent,
    PlayerDetailsComponent,
    StatisticsComponent
  ],
  template: `
    <div class="container my-4">
      <div class="row">
        <div class="col-md-4">
          <app-league-list
            [majorLeagues]="majorLeagues"
            [cemacLeagues]="cemacLeagues"
            (leagueSelected)="onLeagueSelect($event)">
          </app-league-list>
        </div>
        <div class="col-md-4">
          <app-team-list
            [teams]="teams"
            (teamSelected)="onTeamSelect($event)">
          </app-team-list>
        </div>
        <div class="col-md-4">
          <app-player-list
            [players]="players"
            (playerSelected)="onPlayerSelect($event)">
          </app-player-list>
          <app-player-details
            *ngIf="selectedPlayer"
            [player]="selectedPlayer">
          </app-player-details>
        </div>
      </div>
      <app-statistics></app-statistics>
    </div>
  `
})
export class ChampionshipsComponent implements OnInit {
  majorLeagues: League[] = [];
  cemacLeagues: League[] = [];
  teams: Team[] = [];
  players: Player[] = [];
  selectedPlayer: Player | null = null;

  constructor(private footballService: FootballService) {}

  ngOnInit() {
    this.loadLeagues();
  }

  private loadLeagues() {
    this.footballService.getMajorLeagues().subscribe(leagues => {
      this.majorLeagues = leagues;
    });

    this.footballService.getCemacLeagues().subscribe(leagues => {
      this.cemacLeagues = leagues;
    });
  }

  onLeagueSelect(league: League) {
    this.footballService.getTeamsByLeague(league.id).subscribe(teams => {
      this.teams = teams;
      this.players = [];
      this.selectedPlayer = null;
    });
  }

  onTeamSelect(team: Team) {
    this.footballService.getPlayersByTeam(team.id).subscribe(players => {
      this.players = players;
      this.selectedPlayer = null;
    });
  }

  onPlayerSelect(player: Player) {
    this.selectedPlayer = player;
  }
}