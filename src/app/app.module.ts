import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ParentModule } from './parent/parent.module';
import { AppRoutingModule } from './app-routing.module';
import { Parent2Module } from './parent2/parent2.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ParentModule,
    Parent2Module,
    AppRoutingModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
