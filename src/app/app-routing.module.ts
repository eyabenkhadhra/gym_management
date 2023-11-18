import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MembersComponent } from './members/members.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AboutComponent } from './about/about.component';
import { DialogComponent } from './dialog/dialog.component';
import { LoginComponent } from './login/login.component';
import { LocalisationComponent } from './localisation/localisation.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'members', component: MembersComponent },
  { path: 'members/add', component: MemberFormComponent },
  { path: 'members/edit/:id', component: MemberFormComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'reservation', component: ReservationsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'localisation', component: LocalisationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
