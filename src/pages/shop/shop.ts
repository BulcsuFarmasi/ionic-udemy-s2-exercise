import { Component } from '@angular/core';
import { NavController } from 'ionic-angular'

import { BuyoutPage } from '../buyout/buyout';

@Component({
    selector: 'page-shop',
    templateUrl: 'shop.html'
})

export class ShopPage {

    constructor (private navController:NavController) {}
    
    onGoToBuyout (productName:string) {
        this.navController.push(BuyoutPage, {productName});
    }
    
}