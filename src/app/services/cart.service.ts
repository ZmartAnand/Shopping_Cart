// cart.service.ts
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class CartService {
  private cartItems: any[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCountSubject.asObservable();
  constructor() {
    const user = JSON.parse(localStorage.getItem("currentUser") || "[]");
    this.loadUserCart(user.email);
  }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product: any) {
    const existing = this.cartItems.find((item) => item.id === product.id);
    if (!existing) {
      product.quantity = 1; // Initialize quantity
      this.cartItems.push(product);
    } else {
      existing.quantity += 1; // If exists, increase quantity
    }
    this.saveCartItemsToLocal();
    this.updateCartCount();
  }

  saveCartItemsToLocal() {
    const user = JSON.parse(localStorage.getItem("currentUser") || "[]");
    if (user?.email) {
      localStorage.setItem(
        `cart_${user.email}`,
        JSON.stringify(this.cartItems)
      );
    }
    this.updateCartCount();
  }

  removeFromCart(product: any) {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    this.saveCartItemsToLocal();
    this.updateCartCount();
  }

  loadUserCart(email: string) {
    console.log('get',email)
    const savedCart = localStorage.getItem(`cart_${email}`);
    console.log("saved", savedCart);
    this.cartItems = savedCart ? JSON.parse(savedCart) : [];
    this.updateCartCount();
  }

  updateCartCount() {
    this.cartCountSubject.next(this.cartItems.length);
  }
}
