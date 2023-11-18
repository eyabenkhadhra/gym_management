import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: 'logout.component.html',
  styleUrls: ['logout.component.css']
})
export class LogoutComponent {
  constructor(private router: Router) {}

  logout() {
    // Logique de déconnexion
    // ... (Ajoutez votre logique de déconnexion ici)

    // Redirection vers la page de connexion après la déconnexion réussie
    this.router.navigate(['/login']);
  }
}
