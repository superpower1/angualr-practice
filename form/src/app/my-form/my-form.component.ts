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
  usernameUntouched:boolean = true;

  mobileValid:boolean = true;
  mobileUntouched:boolean = true;

	onUsernameInput(form: NgForm) {
	  	if (form) {
	  		this.usernameValid = form.form.get("required").valid;
	  		this.mobileUntouched = form.form.get("minlength").untouched;
	  	}
	}

  onMobileInput(form: NgForm) {
  	if (form) {
  		this.mobileValid = form.form.get("mobileValidator").valid;
  		this.mobileUntouched = form.form.get("mobileValidator").untouched;
  	}
  }

  onSubmit(value:any, valid:boolean) {
  	console.log(value);
  	console.log(valid);
  }

}
