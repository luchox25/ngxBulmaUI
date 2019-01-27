import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngb-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() iconLeft: string;
  @Input() iconRight: string;
  @Input() isHorizontal: boolean;
  @Input() isLoading = false;
  @Input() label: string;
  @Input() message: string;
  @Input() msgColor: string;
  @Input() size: string;

  constructor() { }

  ngOnInit() {
  }

}
