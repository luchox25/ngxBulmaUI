import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field.component';
import { DirectivesModule } from '../directives/directives.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

@NgModule({
  declarations: [FieldComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DirectivesModule
  ],
  exports: [FieldComponent]
})
export class FieldModule { }
