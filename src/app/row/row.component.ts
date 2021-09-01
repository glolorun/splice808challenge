import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { STEPS } from '../button/button.component';

@Component({
  selector: 'app-row',
  template: `
    <app-button [childMessage]=parentMessage  
      ></app-button>
  `,
})
export class RowComponent {
  public steps = STEPS
  parentMessage = this.steps
  constructor() {}

}
