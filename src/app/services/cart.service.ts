// cart.service.ts
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class CartService {
  private cartItems: any[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCountSubject.asObservable();

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product: any) {
    const existing = this.cartItems.find((item) => item.id === product.id);
    if (!existing) {
      this.cartItems.push(product);
      this.cartCountSubject.next(this.cartItems.length);
    }
  }

  removeFromCart(product: any) {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    this.updateCartCount();
  }

  updateCartCount() {
    this.cartCountSubject.next(this.cartItems.length);
  }
}
