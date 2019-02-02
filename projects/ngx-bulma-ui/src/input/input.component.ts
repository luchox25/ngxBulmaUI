import { Component, Input, Output, EventEmitter, forwardRef, Renderer2, ElementRef, OnInit } from '@angular/core';
import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Subject, Subscription } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

import { getNgbInputUnsupportedTypeError } from './input.errors';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { type } from 'os';



// Invalid input type. Using one of these will throw an InputUnsupportedTypeError.
const NGB_INPUT_INVALID_TYPES = [
  'button',
  'checkbox',
  'file',
  'hidden',
  'image',
  'radio',
  'range',
  'reset',
  'submit'
];

@Component({
  selector: 'ngb-input',
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor, OnInit {
  /* Private variables section */
  private _value: string;
  private _type: string;
  /* End private variables section */
  /* Public variables section*/
  public disabled: boolean;
  public onChange: (val: string) => void;
  public onTouched: () => void;
  // Inputs
  @Input() public color: string;
  @Input() public handleEventInputs: Array<string>;
  @Input() public isRounded = false;
  @Input() public isStatic = false;
  @Input() public placeholder: string;
  @Input() public readonly = false;
  @Input() public size: string;
  @Input() public state: string;
  // Outputs
  @Output() eventData = new EventEmitter<{type: string, event: Event}>();
  /* End public variables section */

  constructor(private _renderer: Renderer2, private _el: ElementRef) {
  }

  ngOnInit() {
    this._registerEventsListening();
  }

  get type(): string {
    return this._type;
  }

  @Input('type')
  set type(value: string) {
    this._type = value || 'text';
    this._validateType();

    // When using Angular inputs, developers are no longer able to set the properties on the native
    // input element. To ensure that bindings for `type` work, we need to sync the setter
    // with the native property. Textarea elements don't support the type property or attribute.
    if (!this._isTextarea() && getSupportedInputTypes().has(this._type)) {
      (this._el.nativeElement as HTMLInputElement).type = this._type;
    }
  }

  get value(): string {
    return this._value ? this._value : '';
  }

  set value(val: string) {
    if (val !== this._value) {
        this._value = val ? val : '';
        this.onChange(val);
    }
  }

  public writeValue(value: string): void {
    this._value = value ? value : '';
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
    this._renderer.listen(this._el.nativeElement, 'input', (event) => {
      this.onChange(event.target.value);
    });
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
    this._renderer.listen(this._el.nativeElement, 'blur', (event) => {
      this.onTouched();
    });
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  protected _isTextarea() {
    return this._el.nativeElement.nodeName.toLowerCase() === 'textarea';
  }

  protected _validateType() {
    if (NGB_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
      throw getNgbInputUnsupportedTypeError(this._type);
    }
  }

  private _registerEventsListening() {
    if (this.handleEventInputs) {
      this.handleEventInputs.forEach((eventName: string) => {
        this._renderer.listen(this._el.nativeElement, eventName, (event) => {
          this.eventData.emit({type: eventName, event});
        });
      });
    }
  }
}
