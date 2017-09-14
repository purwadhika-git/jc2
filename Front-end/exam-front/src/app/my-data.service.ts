import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class MyDataService {

  name : string = "";
  list : object[] = [];

  constructor(private http : Http) { }

  GetData(){
    return "Hello World !!";
  }

  GetAllUser(){
    this.http.get('https://randomuser.me/api/?results=15')
    .subscribe(
      result => {
        result.json().results.forEach(user => {
          this.list.push({
            "name" : user.name.first + ' ' + user.name.last,
            "email" : user.email,
            "phoneNumber" : user.phone
          });
        });
      },
      error => {

      }
    );
  }

}
