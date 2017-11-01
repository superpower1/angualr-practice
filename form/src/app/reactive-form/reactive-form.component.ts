import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, FormArray, FormArrayName, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

	formModel: FormGroup = new FormGroup({
		dateRange: new FormGroup({
			from: new FormControl(),
			to: new FormControl()
		}),
		emails: new FormArray([
			new FormControl('a@a.com'),
			new FormControl('b@a.com')
		])
	});

	newForm: FormGroup;

	// 使用FormBuilder也可以实现fb.group和fb.array节省代码
  constructor(fb: FormBuilder) {
  	this.newForm = fb.group({
  		alias: [''],
  		age: [''],
  		pwdGroup: fb.group({
  			pwd: [''],
  			pwdConfirm: ['']
  		})

  	});
  }

  ngOnInit() {
  }

  onSave() {
  	console.log(this.formModel.value);
  }

  addEmail() {
  	let emails = this.formModel.get('emails') as FormArray;
  	emails.push(new FormControl());
  }

  onSubmit() {
  	console.log(this.newForm.value);
  }

}
