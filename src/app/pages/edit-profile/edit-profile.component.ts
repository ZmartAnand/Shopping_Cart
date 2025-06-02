import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-edit-profile",
  standalone: true, //
  imports: [CommonModule, FormsModule], // ✅
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"],
})
export class EditProfileComponent implements OnInit {
  user: any = {
    username: "",
    email: "",
    mobile: "",
    address: "",
    gender: "",
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      this.user = JSON.parse(currentUser);
    }
  }

  saveChanges() {
    // Update currentUser
    localStorage.setItem("currentUser", JSON.stringify(this.user));

    // Update user in users array
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const index = users.findIndex(
      (u: any) => u.username === this.user.username
    );
    if (index !== -1) {
      users[index] = this.user;
      localStorage.setItem("users", JSON.stringify(users));
    }

    alert("Profile updated successfully!");
    this.router.navigate(["/profile"]);
  }
}
