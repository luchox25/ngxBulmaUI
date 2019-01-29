import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[ngbColor]'
})
export class ColorDirective {
  @HostBinding('class.is-white') public isWhite = false;
  @HostBinding('class.is-light') public isLight = false;
  @HostBinding('class.is-dark') public isDark = false;
  @HostBinding('class.is-black') public isBlack = false;
  @HostBinding('class.is-text') public isText = false;
  @HostBinding('class.is-primary') public isPrimary = false;
  @HostBinding('class.is-link') public isLink = false;
  @HostBinding('class.is-info') public isInfo = false;
  @HostBinding('class.is-success') public isSuccess = false;
  @HostBinding('class.is-warning') public isWarning = false;
  @HostBinding('class.is-danger') public isDanger = false;

  @Input() set ngbColor(value: string) {
    const color = !!value ? value.toLocaleLowerCase().trim() : '';
    switch ( color ) {
      case 'white':
          this.isWhite = true;
        break;
      case 'light':
        this.isLight = true;
        break;
      case 'dark':
        this.isDark = true;
        break;
      case 'black':
        this.isBlack = true;
        break;
      case 'text':
        this.isText = true;
        break;
      case 'primary':
        this.isPrimary = true;
        break;
      case 'link':
        this.isLink = true;
        break;
      case 'info':
        this.isInfo = true;
        break;
      case 'success':
        this.isSuccess = true;
        break;
      case 'warning':
        this.isWarning = true;
        break;
      case 'danger':
        this.isDanger = true;
        break;
    }
  }
}
