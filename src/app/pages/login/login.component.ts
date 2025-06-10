import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { CartService } from "../../services/cart.service";
import { AuthService } from "../../services/auth.service";
import { sendPasswordResetEmail, user } from "@angular/fire/auth";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  email = "";
  password = "";
  loading = false; // <- spinner flag

  constructor(
    private router: Router,
    private signin: Router,
    private cartService: CartService,
    private authService: AuthService
  ) {}

  login() {
    this.authService
      .login(this.email, this.password)
      .then((user: any) => {
        alert("Login Successfully");
        localStorage.setItem("currentUser", JSON.stringify(user));
        this.router.navigate(["/home"], { replaceUrl: true });
      })
      .catch((error) => {
        alert(
          "Login failed: " + (error.message || "Invalid email or password")
        );
      });
  }

  movetosignin() {
    this.signin.navigate(["signup"]);
  }
  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
}
