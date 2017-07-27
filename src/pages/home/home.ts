
import { Component } from '@angular/core';
import { MapPage } from '../map/map';
import { ListPage } from '../list/list';
import { NavController,  NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list: any;

  tab1Root: any = MapPage;
  tab2Root: any = ListPage;

  constructor(params: NavParams){

  }

}
