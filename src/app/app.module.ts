import { NgModule }      from '@angular/core';

import { AppComponent }   from './app.component';

// Import PrimeNG modules
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  imports: [
    DynamicDialogModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
