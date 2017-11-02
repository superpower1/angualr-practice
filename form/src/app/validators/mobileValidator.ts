import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

export function mobileValidator(control: FormControl) : any {
	var mobileReg = /^04[0-9]{8}$/;
	let valid = mobileReg.test(control.value);
	return valid ? null : {mobile:true};
}