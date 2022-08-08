import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarModule } from "./navbar/navbar.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule} from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    NavbarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
