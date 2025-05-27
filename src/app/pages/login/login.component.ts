import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  username = "";
  password = "";

  constructor(
    private router: Router,
    private signin: Router,
    private cartService: CartService
  ) {}

  login() {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u: any) => u.username === this.username && u.password === this.password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user)); // Optional: store current user
      this.cartService.loadUserCart(this.username);
      this.router.navigate(["/home"]);
    } else {
      alert("Invalid username or password");
    }
  }
  movetosignin() {
    this.signin.navigate(["signup"]);
  }
}
