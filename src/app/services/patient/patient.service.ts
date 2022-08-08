import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LocalStorageService} from "../local-storage/local-storage.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  // ajouter patient
  addPatient(data:any){
    return this.httpClient.post(environment.API_URL + '/patient/ajout',data,this.localStorage.getAuthorization());
  }
  // liste des patients
  getListPatients(){
    return this.httpClient.get(environment.API_URL + '/patients/liste',this.localStorage.getAuthorization());
  }

  //Rechercher un patient
  search(data:any){
    return this.httpClient.get(environment.API_URL + '/patient/rechercher/' + data, this.localStorage.getAuthorization());
  }

  //get patient by id
  getPatientById(id:any){
    return this.httpClient.get(environment.API_URL + '/patient/' + id, this.localStorage.getAuthorization());
  }

  //edit patient
  editPatient(id:any, data:any){
    return this.httpClient.put(environment.API_URL + '/patient/modifier/' + id, data, this.localStorage.getAuthorization());
  }

  //delete patient
  deletePatient(id:any){
    return this.httpClient.delete(environment.API_URL + '/patient/supprimer/' + id, this.localStorage.getAuthorization());
  }



}
