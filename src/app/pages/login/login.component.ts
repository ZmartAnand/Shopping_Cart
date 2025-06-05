import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { CartService } from "../../services/cart.service";
import { AuthService } from "../../services/auth.service";

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
  loading = false; // <- spinner flag

  constructor(
    private router: Router,
    private signin: Router,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  login() {
    this.loading = true; // Start spinner

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (u: any) => u.username === this.username && u.password === this.password
      );

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        this.cartService.loadUserCart(this.username);
        this.router.navigate(["/home"], { replaceUrl: true });
      } else {
        alert("Invalid username or password");
      }

      this.loading = false; // Stop spinner
    }, 1000); // simulate a short delay
  }

  movetosignin() {
    this.signin.navigate(["signup"]);
  }
  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
}
