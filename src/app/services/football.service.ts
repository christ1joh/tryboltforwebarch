import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { League } from '../models/league.model';
import { Team } from '../models/team.model';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private apiUrl = 'https://v3.football.api-sports.io';
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': 'YOUR_API_KEY'
  });

  constructor(private http: HttpClient) {}

  getMajorLeagues(): Observable<League[]> {
    return this.http.get<League[]>(`${this.apiUrl}/leagues`, {
      headers: this.headers,
      params: {
        season: '2024',
        countries: 'England,France,Italy,Spain,Germany'
      }
    });
  }

  getCemacLeagues(): Observable<League[]> {
    return this.http.get<League[]>(`${this.apiUrl}/leagues`, {
      headers: this.headers,
      params: {
        season: '2024',
        countries: 'Cameroon,Chad,Gabon,Congo,Central-African-Republic,Equatorial-Guinea'
      }
    });
  }

  getTeamsByLeague(leagueId: number): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.apiUrl}/teams`, {
      headers: this.headers,
      params: {
        league: leagueId.toString(),
        season: '2024'
      }
    });
  }

  getPlayersByTeam(teamId: number): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.apiUrl}/players`, {
      headers: this.headers,
      params: {
        team: teamId.toString(),
        season: '2024'
      }
    });
  }
}