import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product_id : number = 0;
  file : FileList;

  constructor(private http:Http, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.product_id = params['product_id'];
      console.log(this.product_id);
   });
  }

  fileChange(ev){
    this.file = ev.target.files;
    console.log(this.file);
  }

  upload(){
    if(this.file.length > 0){
      var myFile : File = this.file[0];
      var formData : FormData = new FormData();
      formData.append('image', myFile);
      formData.append('product_id', '1');

      var hd = new Headers();
      var options = new RequestOptions({ headers : hd });
      this.http.post('http://localhost:8000/api/product/saveproductimage', formData, options)
      .subscribe(
        result => {
          console.log("Berhasil")
        },
        error => {
          console.log("Error !")
        }
      );

      

    }
  }

}
