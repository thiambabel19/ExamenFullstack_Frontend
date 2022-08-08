import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage/local-storage.service";
import {AuthServiceService} from "../../services/Authentification/auth-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthServiceService,
    private localStorage: LocalStorageService,
  ) { }

  dataUser:any = []; // pour recuperer le localStorage
  user:any;     // stock les infos et le token

  ngOnInit(): void {
    this.dataUser = this.localStorage.getData('dataUser');
    this.user = JSON.parse(this.dataUser);
  }

  logout() {
    let email = this.user.email;
    //console.log(email);
    this.authService.logogut(email).subscribe((result:any) => {
      //console.log(result);
      return this.router.navigate(['login']);
    });
  }

}
