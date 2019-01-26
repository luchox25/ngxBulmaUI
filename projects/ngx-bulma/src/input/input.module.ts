import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { ColorDirective } from '../directives/color.directive';
import { SizeDirective } from '../directives/size.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InputComponent, SizeDirective, ColorDirective],
  exports: [InputComponent],
  entryComponents: [InputComponent]
})
export class InputModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: InputModule };
  }
}
