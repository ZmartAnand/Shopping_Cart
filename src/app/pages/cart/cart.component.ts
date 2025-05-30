import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-cart",
  imports: [CommonModule, RouterModule],
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
    this.cartService.saveCartItemsToLocal(); // Save changes
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.cartService.saveCartItemsToLocal();
    }
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems(); // Update local array
  }

  getTotalPrice() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  constructor(private cartService: CartService) {}
}
