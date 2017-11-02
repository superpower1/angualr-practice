import { Directive } from '@angular/core';
import { mobileValidator } from "../validators/mobileValidator";
import { NG_VALIDATORS } from "@angular/forms"

// 指令Directive与组件component的区别只是没有html模板
@Directive({
  selector: '[appMobileValidator]',
  providers: [{provide: NG_VALIDATORS, useValue: mobileValidator, multi:true}]
})
export class MobileValidatorDirective {

  constructor() { }

}
