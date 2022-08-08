import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from "../services/local-storage/local-storage.service";
import {AuthServiceService} from "../services/Authentification/auth-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submited:boolean = false;
  loginForm!:FormGroup;
  dataUser = [];
  token:any;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private fb: FormBuilder,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    });
  }

  login() {
    this.submited = true;
    const formData = this.loginForm.getRawValue();
    const data = {
      email : formData.email,
      password : formData.password
    }

    this.authService.login(data).subscribe((result:any) => {
      //console.log(result);
      this.token = result.token;
      sessionStorage.setItem('token', this.token);
      this.localStorage.saveData('dataUser', result.user);

      this.router.navigate(['/home']);
    }, error => {
      //console.log('incorrect');
      alert("Adresse ou mot de passe incorrect ...");
      this.loginForm.reset();
    });

  }
}
