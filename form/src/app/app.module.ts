import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    ReactiveFormComponent,
    MobileValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
