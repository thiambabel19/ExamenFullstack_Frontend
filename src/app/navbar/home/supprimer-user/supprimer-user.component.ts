import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthServiceService} from "../../../services/Authentification/auth-service.service";

@Component({
  selector: 'app-supprimer-user',
  templateUrl: './supprimer-user.component.html',
  styleUrls: ['./supprimer-user.component.css']
})
export class SupprimerUserComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthServiceService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.authService.deleteUser(id).subscribe((result:any) => {
      alert("vous venez de supprimer cet utilisateur ...");
      return this.router.navigate(['home/users']);
    }, error => {
      alert("Erreur lors de la suppression de cet médecin !!!");
    });
  }

}
