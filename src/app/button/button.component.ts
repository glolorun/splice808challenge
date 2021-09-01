import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LoopOptions, startLoop } from "../Tone.service";
import * as Tone from 'tone'



export interface Step {
  id: number;
  value: boolean;
}
export var STEPS: Step[] = [
  { id: 1, value: false },
  { id: 2, value: false },
  { id: 3, value: false },
  { id: 4, value: false },
  { id: 5, value: false },
  { id: 6, value: false },
  { id: 7, value: false },
  { id: 8, value: false },
  { id: 9, value: false },
  { id: 10, value: false },
  { id: 11, value: false },
  { id: 12, value: false },
  { id: 13, value: false },
  { id: 14, value: false },
  { id: 15, value: false },
  { id: 16, value: false },
];

@Component({
  selector: 'app-button',
    styleUrls: ['./button.component.scss'],
  template: `
  <div class="app-button__container">
<p class="app-button__kick">Kick</p>
    <ul class="app-button__steplist">
   <li class="app-button__steps"*ngFor="let x of step; let i = index;">
     
        <input
        class="app-button__step"
          type="button"
          [attr.id]="i"
          [(ngModel)]="x.id"
          [ngClass]="{ 'Off' : !isActive, 'On' : isActive}" 
          (click)="getInstrument()"
        />
      </li>
    </ul>
</div>
    <button class="app-button__start" (click)="play()">Start (Check Console)</button>
  `,
})
export class ButtonComponent {
  // @Input() step!: Step;

  @Input() childMessage = STEPS;
  @Input() isActive: boolean = false;
  public step = this.childMessage;
  currentThing: any;
  public number: number = 1;
  // @Output('ngModelChange') update = new EventEmitter<boolean>();
 
  public changeState( id:number, value:boolean ) {
    for (var i in STEPS) {
      if (STEPS[i].id == id) {
         STEPS[i].value = value;
         break; 
      }
    }
 }

 play(){
  Tone.start();
  return startLoop()
 }

  getInstrument(): void {
    this.isActive = !this.isActive;
    if (this.isActive) {
      console.log('On');
      // this.changeState('','')
    } else if (!this.isActive) {
      console.log('Off');
    } else {
      console.log('error');
    }
  }

  constructor() {}
}
