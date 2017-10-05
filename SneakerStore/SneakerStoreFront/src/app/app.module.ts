import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
