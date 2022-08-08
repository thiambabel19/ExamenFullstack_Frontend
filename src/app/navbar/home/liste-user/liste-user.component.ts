import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../../../services/Authentification/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from "../../../services/local-storage/local-storage.service";

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})

export class ListeUserComponent implements OnInit {

  //________ For the Pagination __________
  page:number = 1;
  count:number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  //________ End Pagination __________

  submited:boolean = false;
  users:any;
  userForm!:FormGroup;
  userSearch:string = '';

  formRecherche = this.fb.group({
    name : ''
  });

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    //private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.resetForm();
    this.getListUser();
  }

  resetForm(){
    return this.userForm = this.fb.group({
      name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required],
      password_confirmation : ['', Validators.required],
    });
  }

  addUser(){
    this.submited = true;
    const formData = this.userForm.getRawValue();
    const data = {
      name : formData.name,
      email : formData.email,
      password : formData.password,
      password_confirmation : formData.password_confirmation
    }
    this.authService.addUser(data).subscribe((result:any) => {
      alert('Cet utilisateur a été ajouté avec succès ...');
      this.getListUser();
      this.submited = false;
      this.resetForm();
    }, error => {
      alert("Erreur lors l'ajout de cet utilisateur !!!");
      if(data.password != data.password_confirmation)
        alert("Mot de passe non identique !!!");
    });
  }

  getListUser(){
    return this.authService.getAllUsers().subscribe((result:any) => {
      this.users = result;
    }, error => {
      alert("Erreur lors de la récupération des données !!!");
    });
  }

  search() {
    const formData = this.formRecherche.getRawValue();
    let user = formData.name;

    //console.log(profil);
    this.authService.search(user).subscribe((result:any) => {
      //console.log(result);
      this.userSearch = result;
    }, error => {
      alert("Utilisateur introuvable ...");
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
