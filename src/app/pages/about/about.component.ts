import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container my-4">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="card">
            <div class="card-body text-center">
              <img src="assets/logo.png" alt="Logo" class="mb-4" style="max-height: 100px;">
              <h2>À Propos</h2>
              <p class="lead">Application de statistiques football</p>
              <hr>
              <div class="text-start">
                <h5>Auteur</h5>
                <p>Nom de l'étudiant</p>
                <h5>Description</h5>
                <p>Cette application permet de consulter les statistiques des championnats majeurs de football et des championnats de la zone CEMAC.</p>
                <h5>Copyright</h5>
                <p>&copy; 2024 Football App. Tous droits réservés.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}