import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from './color.directive';
import { SizeDirective } from './size.directive';

const directives = [
    ColorDirective,
    SizeDirective
];

@NgModule({
  declarations: [...directives],
  imports: [
    CommonModule
  ],
  exports: [...directives]
})
export class DirectivesModule { }
