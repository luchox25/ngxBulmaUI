import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputModule, FieldModule } from 'ngx-bulma-ui-dev';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputModule,
    FieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
