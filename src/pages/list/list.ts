import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Locations } from '../../providers/locations/locations';

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @Component({
   selector: 'page-list',
   templateUrl: 'list.html'
 })
 export class ListPage {

   constructor(public navCtrl: NavController, public locations: Locations) {}

   ionViewDidLoad() {
     console.log('Hello ListPage Page');
   }

 }
