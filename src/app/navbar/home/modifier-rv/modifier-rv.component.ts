import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../../services/Authentification/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RvService} from "../../../services/Rv/rv.service";
import {MedecinService} from "../../../services/medecin/medecin.service";
import {LocalStorageService} from "../../../services/local-storage/local-storage.service";
import {PatientService} from "../../../services/patient/patient.service";

@Component({
  selector: 'app-modifier-rv',
  templateUrl: './modifier-rv.component.html',
  styleUrls: ['./modifier-rv.component.css']
})
export class ModifierRvComponent implements OnInit {

  submited:boolean = false;
  modForm!:FormGroup;
  medecins:any;
  rv:any;
  dataUser:any;
  user: any;
  patients:any;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private rvService: RvService,
    private medecinService: MedecinService,
    private localStorage: LocalStorageService,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.dataUser = this.localStorage.getData('dataUser');
    this.user = JSON.parse(this.dataUser);
    let id = this.route.snapshot.paramMap.get('id');
    this.rvService.getRvByIb(id).subscribe((result:any) => {
      this.rv = result;
      this.modForm = this.fb.group({
        date : this.rv.date,
        libelle : this.rv.libelle,
        medecins_id : this.rv.medecins_id,
        patients_id : this.rv.patients_id,
        user_id: this.rv.user_id
      });
    });

    this.medecinService.getListMedecins().subscribe((result:any) => {
      this.medecins = result;
    });

    this.patientService.getListPatients().subscribe((result:any) => {
      this.patients = result;
    });
  }

  editRv() {
    this.submited = true;
    let id = this.route.snapshot.paramMap.get('id');
    const formData = this.modForm.getRawValue();
    const data = {
      date : formData.date,
      libelle : formData.libelle,
      medecins_id : formData.medecins_id,
      patients_id : formData.patients_id,
      user_id: this.user.id
    };
    //console.log(data);
    this.rvService.editRv(id, data).subscribe((result:any) => {
        alert("Rendez-vous modifié avec succès ...");
        return this.router.navigate(['home/rv']);
    }, error => {
      alert("Erreur lors de la modification de cet rendez-vous !!!");
    });
  }

}
