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
  password = "";
  confirmPassword = "";

  constructor(private router: Router, private login: Router) {}

  signup() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Get existing users or initialize empty array
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check for duplicate username
    const userExists = users.some((u: any) => u.username === this.username);
    if (userExists) {
      alert("Username already exists. Try another.");
      return;
    }

    // Add new user
    users.push({ username: this.username, password: this.password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Please login.");
    this.router.navigate(["/login"]);
  }
  movetologin() {
    this.login.navigate(["login"]);
  }
}
