import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { LocalStorageService } from "../local-storage/local-storage.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  //login
  login(data:any){
    return this.httpClient.post(environment.API_URL+'/user/login', data);
    //return data;
  }

  //Liste users
  addUser(data:any){
    return this.httpClient.post(environment.API_URL+'/user/ajout',data, this.localStorage.getAuthorization());
  }

  editUser(id:any, data:any){
    return this.httpClient.put(environment.API_URL+'/user/modifier/'+id, data, this.localStorage.getAuthorization());
  }

  deleteUser(id:any){
    return this.httpClient.delete(environment.API_URL+'/user/supprimer/'+id, this.localStorage.getAuthorization());
  }

  getUserById(id:any){
    return this.httpClient.get(environment.API_URL+'/user/'+id, this.localStorage.getAuthorization());
  }
  //Liste users
  getAllUsers(){
    return this.httpClient.get(environment.API_URL+'/user/liste', this.localStorage.getAuthorization());
  }

  search(name:any){
    return this.httpClient.get(environment.API_URL+'/user/rechercher/'+name, this.localStorage.getAuthorization());
  }

  logogut(data:any){
    return this.httpClient.post(environment.API_URL+'/user/logout', data, this.localStorage.getAuthorization());
  }

}
