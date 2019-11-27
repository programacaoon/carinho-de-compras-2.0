import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { chinesas} from '../chinesas';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-japonesa-detail',
  templateUrl: './japonesa-detail.component.html',
  styleUrls: ['./japonesa-detail.component.css']
})
export class JaponesaDetailComponent implements OnInit {

  chinesa;
   
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.chinesa = chinesas[+params.get('chinesaId')];
    });
  }

  addToCart(chinesa) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(chinesa);
  }

  }





