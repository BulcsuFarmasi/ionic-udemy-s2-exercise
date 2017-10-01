import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage implements OnInit {

  public name:string

  constructor(private navController: NavController, private navParams: NavParams) {}

  ngOnInit () {
    this.name = this.navParams.get('productName')
  }

  onBuy () {
    this.navController.popToRoot();
  }

}
