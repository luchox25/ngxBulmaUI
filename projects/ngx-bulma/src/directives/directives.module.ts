import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from './color.directive';
import { SizeDirective } from './size.directive';

@NgModule({
  declarations: [ColorDirective, SizeDirective],
  imports: [
    CommonModule
  ],
  exports: [ColorDirective, SizeDirective]
})
export class DirectivesModule {
}
