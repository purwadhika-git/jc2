import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
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
    this.http.get("http://localhost:8000/api/product/getallproduct").subscribe(
      result => {
        this.productList = result.json();
        console.log(this.productList);
      },
      error => {

      }
    );
  }

}
