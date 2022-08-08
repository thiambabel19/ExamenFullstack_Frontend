import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PatientService} from "../../../services/patient/patient.service";

@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.css']
})
export class ListePatientComponent implements OnInit {

  //________ For the Pagination __________
  page:number = 1;
  count:number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  //________ End Pagination __________

  submited:boolean = false;
  patients:any;
  patientForm!:FormGroup;
  patientSearch:string = '';

  formRecherche = this.fb.group({
    nomPatient : ''
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {
    this.resetForm();
    this.getListePatients();
  }

  resetForm(){
    return this.patientForm = this.fb.group({
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
      telephone : ['', Validators.required],
      adresse : ['', Validators.required],
    });
  }

  getListePatients(){
    return this.patientService.getListPatients().subscribe((result:any) => {
      //console.log(result);
      this.patients = result;
    }, error => {
      alert("Impossible d'interroger le serveur !!!");
    });
  }

  search() {
    const formData = this.formRecherche.getRawValue();
    let patient = formData.nomPatient;

    //console.log(profil);
    this.patientService.search(patient).subscribe((result:any) => {
      //console.log(result);
      this.patientService = result;
    }, error => {
      alert("Medecin introuvable ...");
    });
  }


  // function Pour la pagination
  onTableDataChange(event:any){
    this.page = event;
    //this.search();
  }

  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1;
    //this.search();
  }


  addPatient() {
    this.submited = true;
    const formData = this.patientForm.getRawValue();
    const data = {
      prenom : formData.prenom,
      nom : formData.nom,
      telephone: formData.telephone,
      adresse: formData.adresse
    }
    //console.log(data);
    this.patientService.addPatient(data).subscribe((result:any) => {
      this.getListePatients();
      this.submited = false;
      this.resetForm();
    }, error => {
      alert("Une erreur est survenu lors de cette opération !!!");
    });
  }


}
