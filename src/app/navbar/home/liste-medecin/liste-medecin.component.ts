import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../../../services/Authentification/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MedecinService} from "../../../services/medecin/medecin.service";

@Component({
  selector: 'app-liste-medecin',
  templateUrl: './liste-medecin.component.html',
  styleUrls: ['./liste-medecin.component.css']
})
export class ListeMedecinComponent implements OnInit {

  //________ For the Pagination __________
  page:number = 1;
  count:number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  //________ End Pagination __________

  submited:boolean = false;
  tabMedecins:any;
  medecinForm!:FormGroup;
  medecinSearch:string = '';

  formRecherche = this.fb.group({
    nomMedecin : ''
  });

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private medecinService: MedecinService
  ) { }

  ngOnInit(): void {
    this.resetForm();
    this.getListeMedecin();
  }

  resetForm(){
    return this.medecinForm = this.fb.group({
      nom : ['', Validators.required],
      prenom : ['', Validators.required],
      telephone : ['', Validators.required],
    });
  }

  addMedecin() {
    this.submited = true;
    const formData = this.medecinForm.getRawValue();
    const data = {
      prenom : formData.prenom,
      nom : formData.nom,
      telephone: formData.telephone
    }
    this.medecinService.addMedecin(data).subscribe((result:any) => {
      this.getListeMedecin();
      this.submited = false;
      this.resetForm();
    }, error => {
      alert("Une erreur est survenu lors de cette opération !!!");
    });
  }

  getListeMedecin(){
    return this.medecinService.getListMedecins().subscribe((result:any) => {
      //console.log(result);
      this.tabMedecins = result;
    }, error => {
      alert("Impossible d'interroger le serveur !!!");
    });
  }

  search() {
    const formData = this.formRecherche.getRawValue();
    let medecin = formData.nomMedecin;

    //console.log(profil);
    this.medecinService.search(medecin).subscribe((result:any) => {
      //console.log(result);
      this.medecinSearch = result;
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

}
