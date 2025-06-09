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
      this.auth.signup(this.email, this.password).then(() => {
        alert("Welcome Asshoping");
        this.router.navigate(["/login"]);
      });
    }
  }

  movetologin() {
    this.login.navigate(["login"]);
  }
}
