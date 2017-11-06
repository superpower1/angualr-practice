import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	products:Observable<any>;

  constructor(private http: Http) {
  	let myHeader:Headers = new Headers();
  	myHeader.append("Authorization", "Basic 123456");

  	this.products = this.http.get('/api/products', {headers: myHeader}).map((res) => res.json() );
  }

  ngOnInit() {
  	
  }

}
