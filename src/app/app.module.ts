import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MembersComponent } from './members/members.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberService } from 'src/app/services/member.service';
import { ActivitiesComponent } from './activities/activities.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LocalisationComponent } from './localisation/localisation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MembersComponent,
    MemberFormComponent,
    ActivitiesComponent,
    ReservationsComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    DialogComponent,
    LoginComponent,
    LogoutComponent,
    LocalisationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
