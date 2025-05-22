import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  // add other properties if needed
}

@Injectable({ providedIn: "root" })
export class CartService {
  private items: Product[] = [];
  private cartSubject = new BehaviorSubject<Product[]>([]);

  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product) {
    this.items.push(product);
    this.cartSubject.next(this.items);
  }

  removeFromCart(productId: number) {
    this.items = this.items.filter((item) => item.id !== productId);
    this.cartSubject.next(this.items);
  }

  getCartItems() {
    return [...this.items];
  }

  getCartCount() {
    return this.items.length;
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}
