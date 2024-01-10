

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; 
import { CategoriestabComponent } from './categoriestab/categoriestab.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

//@NgModule({
//  declarations: [CategoriestabComponent],
//  imports: [CommonModule, MatIconModule], 
//})
@NgModule({
    declarations: [
     
      // Other components
    ],
    imports: [BrowserModule],
    bootstrap: []
  }
  )
export class AppModule {}
