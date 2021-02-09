import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import {SorterService} from './sorter.service';

// The core module is what my services will use, here I have imported the httpClient module so I can make http requests in my
// services
@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [DataService, SorterService]
})
export class CoreModule { }
