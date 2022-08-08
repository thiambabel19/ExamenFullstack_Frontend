import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class RvService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  addRv(data:any){
    return this.httpClient.post(environment.API_URL+'/rv/ajout', data, this.localStorage.getAuthorization());
  }

  ListRv(){
    return this.httpClient.get(environment.API_URL+'/rv/liste', this.localStorage.getAuthorization());
  }

  getRvByIb(id:any){
    return this.httpClient.get(environment.API_URL+'/rv/'+id, this.localStorage.getAuthorization());
  }

  editRv(id:any, data:any){
    return this.httpClient.put(environment.API_URL+'/rv/modifier/'+id, data, this.localStorage.getAuthorization());
  }

  deleteRv(id:any){
    return this.httpClient.delete(environment.API_URL+'/rv/supprimer/'+id, this.localStorage.getAuthorization());
  }

}
