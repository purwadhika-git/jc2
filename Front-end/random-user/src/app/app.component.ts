import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name : string = "Name";
  email : string = "Email";
  phoneNumber : string = "Phone";
  picture : string = "assets/img/profile.jpg";
  UserList : object[] = [];

  constructor(private http:Http){
  }

  RefreshData(){
    // GET, POST, DELETE, PUT
    this.http.get('https://randomuser.me/api/')
    .subscribe(
      result => {
        var user = result.json().results[0];
        this.name = user.name.first + ' ' + user.name.last;
        this.email = user.email;
        this.phoneNumber = user.phone;
        this.picture = user.picture.large;
      },
      error => { 
        console.log(error);
      }
    );

    this.http.get('https://randomuser.me/api/?results=10')
    .subscribe(
      result => {

        this.UserList = [];
        result.json().results.forEach(user => {
          this.UserList.push({
            "name" : user.name.first + ' ' + user.name.last,
            "email" : user.email,
            "phoneNumber" : user.phone
          });
        });

      },
      error => { 
        console.log(error);
      }
    );

  }

  PostData(){
    var body = JSON.stringify({
        "email": "sydney@fife"
    });
    var hd = new Headers({ "Content-Type" : "application/json" });
    var options = new RequestOptions({ headers : hd });

    this.http.post("https://reqres.in/api/register", body, options)
    .subscribe(
      result => {
        console.log(result.json())
      },
      error => {
        console.log(error)
      }
    );
  }

}
