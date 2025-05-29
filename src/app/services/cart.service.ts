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
    this.savedCartItems();
  }

  private savedCartItems() {
    const user = JSON.parse(localStorage.getItem("currentUser") || "[]");
    if (user && user.username) {
      // Check if the user and email exist
      localStorage.setItem(
        `cart_${user.username}`,
        JSON.stringify(this.cartItems)
      ); // Use email as the unique identifier
    }
  }

  removeFromCart(product: any) {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    this.updateCartCount();
  }

  loadUserCart(email: string) {
    const savedCart = localStorage.getItem(`cart_${email}`);
    console.log("saved", savedCart);
    this.cartItems = savedCart ? JSON.parse(savedCart) : [];
    this.updateCartCount();
  }

  updateCartCount() {
    this.cartCountSubject.next(this.cartItems.length);
  }
}
