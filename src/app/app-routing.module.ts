import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParentComponent } from './parent/parent.component';
import { SharedComp1Component } from './shared/sharedcomp1/sharedcomp1.component';
import { Sharedcomp2Component } from './shared/sharedcomp2/sharedcomp2.component';
import { Sharedcomp3Component } from './shared/sharedcomp3/sharedcomp3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'parent', component: ParentComponent },
  { path: '**', component: NotFoundComponent },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
