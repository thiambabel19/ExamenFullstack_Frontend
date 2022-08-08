import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthServiceService} from "../../../services/Authentification/auth-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modifier-user',
  templateUrl: './modifier-user.component.html',
  styleUrls: ['./modifier-user.component.css']
})
export class ModifierUserComponent implements OnInit {

  submited:boolean = false;
  modForm!:FormGroup;
  user:any;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.authService.getUserById(id).subscribe((result:any) => {
      this.user = result;
      this.modForm = this.fb.group({
        name : this.user.name,
        email : this.user.email,
        password : this.user.password,
        password_confirmation : this.user.password_confirmation
      });
    });
  }

  editUser() {
    this.submited = true;
    let id = this.route.snapshot.paramMap.get('id');
    const formData = this.modForm.getRawValue();
    const data = {
      name : formData.name,
      email : formData.email,
      password : formData.password,
      password_confirmation : formData.password_confirmation
    };

    this.authService.editUser(id, data).subscribe((result:any) => {
      //console.log(result);
      alert("Les infos de cet utilisateurs ont été modifiés avec succès ...");
      return this.router.navigate(['home/users']);
    }, error => {
      alert("Une erreur est survenue lors de la modification !!!");
    });
  }
}
