import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  region: string = '';

  buscar(){

    this.onEnter.emit(this.region);

  }

}
