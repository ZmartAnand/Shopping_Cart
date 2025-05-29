import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartService } from "../../services/cart.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent implements OnInit {
  cartCount = 0;
  isNavCollapsed = true;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
      this.cartCount = 0;
    });
  }
}
