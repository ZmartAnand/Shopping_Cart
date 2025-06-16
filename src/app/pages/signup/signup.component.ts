import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-signup",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent {
  username = "";
  email = "";
  mobile = "";
  address = "";
  gender = "";
  password = "";
  confirmPassword = "";

  constructor(
    private router: Router,
    private login: Router,
    private auth: AuthService
  ) {}

  signup() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (this.email && this.password === this.confirmPassword) {
      this.auth
        .signup(this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;

          const userData = {
            uid: user.uid,
            username: this.username,
            email: this.email,
            mobile: this.mobile,
            address: this.address,
            gender: this.gender,
            photo: "",
          };

          localStorage.setItem("currentUser", JSON.stringify(userData));

          alert("Welcome to ASShopping Cart");
          this.router.navigate(["/home"]);
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            alert(
              "This email is already registered. Please login or use another email."
            );
          } else {
            alert("Signup failed: " + error.message);
          }
          console.error("Signup failed:", error);
        });
    }
  }

  movetologin() {
    this.login.navigate(["login"]);
  }
}
