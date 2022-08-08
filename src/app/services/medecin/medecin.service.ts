import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LocalStorageService} from "../local-storage/local-storage.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  // ajouter medecin
  addMedecin(data:any){
    return this.httpClient.post(environment.API_URL + '/medecin/ajout',data,this.localStorage.getAuthorization());
  }
  // liste des medecins
  getListMedecins(){
    return this.httpClient.get(environment.API_URL + '/medecins/liste',this.localStorage.getAuthorization());
  }

  //Rechercher un medecin
  search(data:any){
    return this.httpClient.get(environment.API_URL + '/medecin/rechercher/' + data, this.localStorage.getAuthorization());
  }

  //get medecin by id
  getMedecinById(id:any){
    return this.httpClient.get(environment.API_URL + '/medecin/' + id, this.localStorage.getAuthorization());
  }

  //edit medecin
  editMedecin(id:any, data:any){
    return this.httpClient.put(environment.API_URL + '/medecin/modifier/' + id, data, this.localStorage.getAuthorization());
  }

  //delete medecin
  deleteMedecin(id:any){
    return this.httpClient.delete(environment.API_URL + '/medecin/supprimer/' + id, this.localStorage.getAuthorization());
  }



}
