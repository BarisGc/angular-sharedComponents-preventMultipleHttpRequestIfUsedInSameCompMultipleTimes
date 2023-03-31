import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComp1Component } from './sharedcomp1/sharedcomp1.component';
import { Sharedcomp2Component } from './sharedcomp2/sharedcomp2.component';
import { Sharedcomp3Component } from './sharedcomp3/sharedcomp3.component';

@NgModule({
  declarations: [SharedComp1Component,Sharedcomp2Component,Sharedcomp3Component],
  imports: [CommonModule],
  exports: [CommonModule, SharedComp1Component,Sharedcomp2Component,Sharedcomp3Component],
})
export class SharedModule {}
