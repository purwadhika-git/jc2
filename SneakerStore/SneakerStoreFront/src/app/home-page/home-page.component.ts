import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  productList : object[] = [];

  constructor(private http:Http) { }

  ngOnInit() {

    var token = localStorage.getItem("token");
    console.log(token);
    var hdr = new Headers({ "Authorization" : "Bearer " + token});
    
    var options = new RequestOptions({ headers : hdr });
    this.http.get("http://localhost:8000/api/product/getallproduct", options)
    .subscribe(
      result => {
        this.productList = result.json();
      },
      error => {
        console.log('Error !');
      }
    );
  }

  redirectToProduct(){
    
  }

}
