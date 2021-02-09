import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersModule} from './customers/customers.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module'; // Here I have imported the core module so it can use imported stuff from here
// and so that this app module registers other components using the core module

// This is my main module file

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CustomersModule, SharedModule, CoreModule // Importing my modules here after importing them above
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
