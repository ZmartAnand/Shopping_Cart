import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  user: any;

  ngOnInit(): void {
    const currentUser = localStorage.getItem("currentUser");
    this.user = currentUser ? JSON.parse(currentUser) : null;
  }
}
