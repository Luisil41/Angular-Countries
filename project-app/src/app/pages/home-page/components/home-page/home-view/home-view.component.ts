import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Ihome } from 'src/app/pages/home-page/models/Ihome';




@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {
//Variable donde se guarda la info
  public homeInfo?: Ihome;

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    //Aqui se recupera el valor de la home
    this.getHome();
  }


  //Función que se conecta con el requeste service y pide la info de la home
  public getHome() {
    this.requestService.getRequest('home').subscribe((dataHome: any)=> {
        this.homeInfo = dataHome;
    })
  }

}
