import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../../services/Authentification/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MedecinService} from "../../../services/medecin/medecin.service";

@Component({
  selector: 'app-modifier-medecin',
  templateUrl: './modifier-medecin.component.html',
  styleUrls: ['./modifier-medecin.component.css']
})
export class ModifierMedecinComponent implements OnInit {

  submited:boolean = false;
  modForm!:FormGroup;
  medecin:any;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private medecinService: MedecinService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.medecinService.getMedecinById(id).subscribe((result:any) => {
      this.medecin = result;
      this.modForm = this.fb.group({
        nom : this.medecin.nom,
        prenom : this.medecin.prenom,
        telephone : this.medecin.telephone
      });
    });
  }

  editMedecin() {
    //console.log("ok");
    this.submited = true;
    let id = this.route.snapshot.paramMap.get('id');
    const formData = this.modForm.getRawValue();
    const data = {
      nom : formData.nom,
      prenom : formData.prenom,
      telephone : formData.telephone
    };

    this.medecinService.editMedecin(id, data).subscribe((result:any) => {
      //console.log(result);
      return this.router.navigate(['home/medecins']);
    }, error => {
      alert("Une erreur est survenue lors de la modification !!!");
    });
  }

}
