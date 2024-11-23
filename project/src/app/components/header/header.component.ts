import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg" style="background-color: #FFD700;">
      <div class="container">
        <a class="navbar-brand" routerLink="/">
          <img src="assets/logo.png" alt="Logo" height="40">
        </a>
        <div class="navbar-nav ms-auto">
          <a class="nav-link" routerLink="/championships" style="color: #000000;">Championnats majeurs</a>
          <a class="nav-link" routerLink="/about" style="color: #000000;">A Propos</a>
          <a class="nav-link position-relative" routerLink="/favorites" style="color: #000000;">
            <i class="bi bi-bell-fill"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              0
            </span>
          </a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .nav-link:hover {
      color: blue !important;
    }
  `]
})
export class HeaderComponent {}