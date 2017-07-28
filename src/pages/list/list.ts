import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Locations } from '../../providers/locations/locations';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';

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
   directions: any = []

   constructor(public navCtrl: NavController, public locations: Locations,  public maps: GoogleMapsProvider) {

   }

   ionViewDidLoad() {
     console.log('Hello ListPage Page');

   }

 }
