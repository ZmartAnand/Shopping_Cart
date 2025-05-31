import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-profile",
  imports: [RouterLink],
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
