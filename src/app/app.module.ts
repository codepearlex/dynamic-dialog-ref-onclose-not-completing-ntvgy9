import { NgModule }      from '@angular/core';

import { AppComponent }   from './app.component';

// Import PrimeNG modules
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    ButtonModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
