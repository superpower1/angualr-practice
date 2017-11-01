import { Component, OnInit } from '@angular/core';
import { 
  FormControl, 
  FormGroup, 
  FormGroupName, 
  FormArray, 
  FormArrayName, 
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // 自定义校验器
  ageValidator(control: FormControl): any {
    let valid:boolean = false;
    if(control.value>=0 && control.value<=200){
      valid = true;
    }
    // 如果校验通过则返回null，否则返回错误信息
    return valid ? null : {age : true};
  }

  pwdValidator(group: FormGroup): any {
    let pwd:FormControl = group.get("pwd") as FormControl;
    let pwdConfirm:FormControl = group.get("pwdConfirm") as FormControl;
    let valid:boolean = (pwd.value === pwdConfirm.value);
    return valid ? null : {pwdEqual:true};
  }

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
      // 第二个参数是校验器，Validator是angular预定义的校验器
  		alias: ['', [Validators.required, Validators.minLength(6)]],
  		age: ['', this.ageValidator],
      // group的校验器写法
  		pwdGroup: fb.group({
  			pwd: ['', Validators.minLength(6)],
  			pwdConfirm: ['']
  		}, {validator: this.pwdValidator})

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
    if(this.newForm.valid){
      console.log('valid');
    }
  	console.log(this.newForm.value);
  }

}
