import { Component, Input, OnInit } from '@angular/core';
import { Ihome } from 'src/app/pages/home-page/models/Ihome';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent implements OnInit {

  @Input () public hero?: Ihome;

  constructor() { }

  ngOnInit(): void {
  }

}
