import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ParentComponent } from './parent.component';

@NgModule({
  declarations: [ParentComponent],
  imports: [SharedModule],
  exports: [ParentComponent],
})
export class ParentModule {}
