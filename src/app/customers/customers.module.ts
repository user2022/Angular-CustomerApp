import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent} from './customers.component'; // Here I am importing the components related to the customer
import {CustomerListComponent} from './customer-list/customer-list.component';
import { FilterTextboxComponent} from './filter-textbox/filter-textbox.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

// This module is where everything related to my customers will be
@NgModule({
  declarations: [CustomerListComponent, CustomersComponent, FilterTextboxComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    CustomersComponent
  ]
})
export class CustomersModule { }
