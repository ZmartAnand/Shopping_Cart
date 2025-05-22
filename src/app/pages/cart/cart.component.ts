import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-cart",
  imports: [CommonModule],
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent {
  cartItems = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 19999,
      image: "https://m.media-amazon.com/images/I/71meEZBQieL._SX522_.jpg",
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      price: 1399,
      image:
        "https://m.media-amazon.com/images/I/41gLj+50LFL._SY300_SX300_.jpg",
    },
  ];

  removeFromCart(item: any) {
    this.cartItems = this.cartItems.filter((i) => i.id !== item.id);
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
