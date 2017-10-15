import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiplePipe } from './pipe/multiple.pipe';
import { ChildComponent } from './child/child.component';
import { PriceQuoteComponent } from './price-quote/price-quote.component';
import { HookComponent } from './hook/hook.component';

var routeConfig: Routes = [
  {path: '', component: BindComponent},
  {path: 'hook', component: HookComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    MultiplePipe,
    ChildComponent,
    PriceQuoteComponent,
    HookComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
