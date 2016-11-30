import { Component, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() options: {
    type: 'default' | 'primary' | 'info' | 'success' | 'info' | 'warning' | 'danger',
    active: boolean,
    size: null | 'sm' | 'lg' | 'xs',
    disabled: boolean
  } = {
    type: 'default',
    active: false,
    disabled: false,
    size: null
  };

  constructor() { }
}
