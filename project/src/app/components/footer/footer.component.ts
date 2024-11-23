import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-dark text-white py-4 mt-auto">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p>Téléphone: (+237) 657 07 98 07</p>
          </div>
          <div class="col-md-6 text-end">
            <p>&copy; 2024 Football App. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}