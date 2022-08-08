import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MedecinService} from "../../../services/medecin/medecin.service";

@Component({
  selector: 'app-supprimer-medecin',
  templateUrl: './supprimer-medecin.component.html',
  styleUrls: ['./supprimer-medecin.component.css']
})
export class SupprimerMedecinComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private medecinService: MedecinService
  ) { }

  ngOnInit(): void {
    alert("vous venez de supprimer ce medecin ...");
    let id = this.route.snapshot.paramMap.get('id');
    this.medecinService.deleteMedecin(id).subscribe((result:any) => {
      return this.router.navigate(['home/medecins']);
    }, error => {
      alert("Erreur lors de la suppression de cet médecin !!!");
    });
  }

}
