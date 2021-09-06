import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IlinksMenu } from 'src/app/models/IProject';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
//Con el decorador Input recupera el valor del padre
  @Input() public menu: IlinksMenu[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
