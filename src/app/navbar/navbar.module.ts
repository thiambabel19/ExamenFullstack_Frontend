import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { HomeComponent } from './home/home.component';
import { ListeMedecinComponent } from './home/liste-medecin/liste-medecin.component';
import { ListeRvComponent } from './home/liste-rv/liste-rv.component';
import { ContactComponent } from './home/contact/contact.component';
import { ListeUserComponent } from "./home/liste-user/liste-user.component";
import { ModifierMedecinComponent } from './home/modifier-medecin/modifier-medecin.component';
import { SupprimerMedecinComponent } from './home/supprimer-medecin/supprimer-medecin.component';
import { ModifierRvComponent } from './home/modifier-rv/modifier-rv.component';
import { SupprimerRvComponent } from './home/supprimer-rv/supprimer-rv.component';
import { ModifierUserComponent } from './home/modifier-user/modifier-user.component';
import { SupprimerUserComponent } from './home/supprimer-user/supprimer-user.component';
import { ListePatientComponent } from './home/liste-patient/liste-patient.component';
import { ModifierPatientComponent } from './home/modifier-patient/modifier-patient.component';
import { SupprimerPatientComponent } from './home/supprimer-patient/supprimer-patient.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent,
    children:[
      { path:'patient/supprimer/:id', component:SupprimerPatientComponent },
      { path:'patient/modifier/:id', component:ModifierPatientComponent },
      { path:'patients', component: ListePatientComponent },
      { path:'user/modifier/:id', component:ModifierUserComponent },
      { path:'user/supprimer/:id', component:SupprimerUserComponent },
      { path:'rv/supprimer/:id', component:SupprimerRvComponent },
      { path:'rv/modifier/:id', component:ModifierRvComponent },
      { path:'medecin/supprimer/:id', component:SupprimerMedecinComponent },
      { path:'medecin/modifier/:id', component:ModifierMedecinComponent },
      { path:'users', component: ListeUserComponent },
      { path:'medecins', component: ListeMedecinComponent },
      { path:'rv', component: ListeRvComponent },
      { path:'contact', component: ContactComponent },
    ]
  },

]

@NgModule({
  declarations: [
    HomeComponent,
    ListeMedecinComponent,
    ListeRvComponent,
    ContactComponent,
    ListeMedecinComponent,
    ModifierMedecinComponent,
    SupprimerMedecinComponent,
    ModifierRvComponent,
    SupprimerRvComponent,
    ListeUserComponent,
    ModifierUserComponent,
    SupprimerUserComponent,
    ListePatientComponent,
    ModifierPatientComponent,
    SupprimerPatientComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ]
})
export class NavbarModule { }
