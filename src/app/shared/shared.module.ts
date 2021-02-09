import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CapitalizePipes } from './capitalize.pipe';


@NgModule({
  declarations: [CapitalizePipes],
  imports: [
    CommonModule
  ],
  exports: [CapitalizePipes]
})
export class SharedModule { }
