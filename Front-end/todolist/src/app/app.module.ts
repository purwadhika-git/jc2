import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from './app.component';

export const firebaseConfig = { 
  apiKey: "AIzaSyBuqb1QWsUJl7Tr_eWyIG3eNtxO6vnM3JE",
  authDomain: "todolist-fad09.firebaseapp.com",
  databaseURL: "https://todolist-fad09.firebaseio.com",
  projectId: "todolist-fad09",
  storageBucket: "todolist-fad09.appspot.com",
  messagingSenderId: "215771777852"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
