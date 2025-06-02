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
  avatarUrl: string = "";
  uploadedPhoto: string | ArrayBuffer | null = null;

  ngOnInit(): void {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      console.log(currentUser);

      this.user = JSON.parse(currentUser);
    }
    const username = this.user?.username || "User";
    const savedPhoto = localStorage.getItem("profilePhoto");

    this.avatarUrl = `https://ui-avatars.com/api/?name=${username}&background=0D8ABC&color=fff`;
    this.uploadedPhoto = savedPhoto ? savedPhoto : null;
  }

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.uploadedPhoto = reader.result;
      localStorage.setItem("profilePhoto", reader.result as string);
    };

    reader.readAsDataURL(file);
  }
}
