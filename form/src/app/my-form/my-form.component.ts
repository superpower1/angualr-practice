import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usernameValid:boolean = true;

  mobileValid:boolean = true;

	onUsernameInput(myform: NgForm) {
	  	if (myform) {
	  		this.usernameValid = myform.form.get("username").valid;
	  	}
	}

  onMobileInput(myform: NgForm) {
  	if (myform) {
  		this.mobileValid = myform.form.get("mobile").valid;
  	}
  }

  onSubmit(value:any, valid:boolean) {
  	console.log(value);
  	console.log(valid);
  }

}
