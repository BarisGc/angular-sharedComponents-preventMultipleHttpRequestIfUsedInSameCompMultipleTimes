import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { Parent2Component } from './parent2.component';

@NgModule({
  declarations: [Parent2Component],
  imports: [SharedModule, ],
  exports: [Parent2Component],
})
export class Parent2Module { }