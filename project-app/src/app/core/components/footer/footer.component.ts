import { Component, Input, OnInit } from '@angular/core';
import { Ifooter } from 'src/app/models/IProject';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  //Con el decorador Input recupera el valor del padre
  @Input() public footer?: Ifooter;

  constructor() { }

  ngOnInit(): void {
  }

}
