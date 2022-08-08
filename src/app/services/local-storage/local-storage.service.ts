import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  token:any = []; // pour recuperer le localStorage
  //userToken:any;     // stock les infos et le token

  public saveData(key: any, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getData(key: any) {
    return localStorage.getItem(key);
  }
  public removeData(key: any) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  getAuthorization(){
    this.token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    });

    const requestOptions = { headers: headers };

    return requestOptions;
  }


}
