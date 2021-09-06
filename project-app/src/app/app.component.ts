import { Component } from '@angular/core';
import { Ifooter, IlinksMenu } from './models/IProject';
import { RequestService } from './service/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public menu: IlinksMenu[] = [];
  public footer?: Ifooter;


  constructor(private requestService:RequestService) {
    //Aquí recuperamos la info del menu y del footer 
    this.getCoreMenu();
    this.getCoreFooter();

  }
  //Utilizamos esta función para recuperar el menu
  public getCoreMenu() {
    this.requestService.getRequest('menu').subscribe((data: any) => {
      this.menu = data;
      console.log(this.menu);
    })

  }
  //Utilizamos esta función para recuperar el footer
  public getCoreFooter() {
    this.requestService.getRequest('footer').subscribe((data: any) => {
      this.footer = data;
      console.log(this.footer);
    })

  }
}
