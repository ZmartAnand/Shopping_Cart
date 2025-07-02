import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { Router, RouterModule } from "@angular/router";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: "app-cart",
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent {
  cartItems: any[] = [];

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }
  increaseQuantity(item: any) {
    item.quantity += 1;
    this.cartService.saveCartItemsToLocal(); 
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.cartService.saveCartItemsToLocal();
    }
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems(); 
  }

  getTotalPrice() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
  placeOrder() {
    this.router.navigate(["/order-success"]);
  }

  constructor(private cartService: CartService, private router: Router) {}
}
