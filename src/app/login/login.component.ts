import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  username: string ='admin';
  password: string ='admin123';

  constructor(private router: Router) {}

  login() {
    // Vérification des informations de connexion
    // ... (Ajoutez votre logique de connexion ici)

    // Redirection vers la page d'accueil après la connexion réussie
    this.router.navigate(['/dashboard']);
  }
}
