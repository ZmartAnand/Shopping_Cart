import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { CartService } from "../../services/cart.service";
import { AuthService } from "../../services/auth.service";
import { sendPasswordResetEmail, user } from "@angular/fire/auth";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  // login() {
  //   this.loading = true;
  //   this.authService
  //     .login(this.email, this.password)
  //     .then(({ user }) => {
  //       localStorage.setItem("currentUser", JSON.stringify(user));
  //       this.cartService.loadUserCart(this.email);
  //       this.router.navigate(["/home"], { replaceUrl: true });
  //     })
  //     .catch((error) => {
  //       alert("Login failed: " + error.message);
  //     })
  //     .finally(() => {
  //       this.loading = false;
  //     });
  // }
  login() {
    this.authService.login(this.email, this.password).then((user: any) => {
      alert("Login Successfully");
      localStorage.setItem("currentUser", JSON.stringify(user));
      this.router.navigate(["/home"], { replaceUrl: true });
    });
  }
  movetosignin() {
    this.signin.navigate(["signup"]);
  }
  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
  resetPassword() {
    if (!this.email) {
      alert("Please enter your email first.");
      return;
    }

    sendPasswordResetEmail(this.authService["auth"], this.email)
      .then(() => alert("Password reset email sent!"))
      .catch((error) => alert(error.message));
  }
}
