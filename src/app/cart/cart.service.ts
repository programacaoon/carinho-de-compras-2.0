import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items = [];

  addToCart(chinesa) {
    this.items.push(chinesa);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
