import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[ngbSize]'
})
export class SizeDirective {

  @HostBinding('class.is-small') public isSmall = false;
  @HostBinding('class.is-normal') public isNormal = false;
  @HostBinding('class.is-medium') public isMedium = false;
  @HostBinding('class.is-large') public isLarge = false;

  @Input() set ngbSize(value: string) {
    const size = value ? value.toLocaleLowerCase().trim() : '';
    switch (size) {
      case 'small':
        this.isSmall = true;
        break;
      case 'normal':
        this.isNormal = true;
        break;
      case 'medium':
        this.isMedium = true;
        break;
      case 'large':
        this.isLarge = true;
        break;
    }
  }

}
