import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../../../services/Authentification/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RvService} from "../../../services/Rv/rv.service";
import {MedecinService} from "../../../services/medecin/medecin.service";
import {LocalStorageService} from "../../../services/local-storage/local-storage.service";
import {PatientService} from "../../../services/patient/patient.service";

@Component({
  selector: 'app-liste-rv',
  templateUrl: './liste-rv.component.html',
  styleUrls: ['./liste-rv.component.css']
})

export class ListeRvComponent implements OnInit {

  //________ For the Pagination __________
  page:number = 1;
  count:number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  //________ End Pagination __________

  submited:boolean = false;
  dataUser:any;
  user:any;
  rvForm!:FormGroup;
  users:any;
  medecins:any;
  rvs:any;
  //nomMedecin:string = '';
  patients:any;

  formRecherche = this.fb.group({
    nomMedecin : ''
  });

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

    this.resetForm();

    this.authService.getAllUsers().subscribe((result:any) => {
      //console.log(result);
      this.users = result;
    });

    this.medecinService.getListMedecins().subscribe((result:any) => {
      //console.log(result);
      this.medecins = result;
    });

    this.patientService.getListPatients().subscribe((result:any) => {
      this.patients = result;
    });

    this.listeRv();

  }

  resetForm(){
    return this.rvForm = this.fb.group({
      date : ['', Validators.required],
      libelle : ['', Validators.required],
      medecin_id : ['', Validators.required],
      patients_id : ['', Validators.required],
    });
  }

  addRv() {
    this.submited = true;
    const formData = this.rvForm.getRawValue();
    const data = {
      date: formData.date,
      libelle: formData.libelle,
      medecins_id: formData.medecin_id,
      patients_id: formData.patients_id,
      user_id: this.user.id
    }
    //console.log(data);
    this.rvService.addRv(data).subscribe((result:any) => {
      //console.log(result);
      this.listeRv();
      this.submited = false;
      this.resetForm();
    }, error => {
      alert("Une erreur est survenue lors de l'enregistrement de cet RV !!!");
    });
  }

  listeRv(){
    return this.rvService.ListRv().subscribe((result:any) => {
      this.rvs = result;
    }, error => {
      alert("Une erreur est survenue lors du chargement de la liste des RV !!!");
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

}
