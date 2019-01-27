import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [InputComponent],
  exports: [InputComponent]
})
export class InputModule {}
