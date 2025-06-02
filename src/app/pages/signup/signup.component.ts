import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

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

  constructor(private router: Router, private login: Router) {}

  signup() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = users.some((u: any) => u.username === this.username);
    if (userExists) {
      alert("Username already exists. Try another.");
      return;
    }

    // Create full user object
    const newUser = {
      username: this.username,
      email: this.email,
      mobile: this.mobile,
      address: this.address,
      gender: this.gender,
      password: this.password,
    };

    // Save to user list
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Save current user separately for profile page
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    alert("Signup successful!");
    this.router.navigate(["/login"]);
  }

  movetologin() {
    this.login.navigate(["login"]);
  }
}
