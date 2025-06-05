import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Auth } from "@angular/fire/auth";

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
  defaultAvatar = "https://www.w3schools.com/howto/img_avatar.png";

  constructor(private auth: Auth) {}

  ngOnInit(): void {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      console.log(currentUser);

      this.user = JSON.parse(currentUser);
      this.auth.onAuthStateChanged((user: any) => {
        console.log("User:", user);
      });
    }
    const username = this.user?.username || "User";
    const savedPhoto = localStorage.getItem("profilePhoto");

    // this.avatarUrl = `https://ui-avatars.com/api/?name=${username}&background=0D8ABC&color=fff`;
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
  // removePhoto() {
  //   this.avatarUrl = "";
  //   this.uploadedPhoto = null;
  //   this.user.photo = "";
  //   localStorage.setItem("currentUser", JSON.stringify(this.user));
  // }
  removePhoto() {
    if (confirm("Are you sure you want to remove your profile photo?")) {
      this.uploadedPhoto = null;
      this.avatarUrl = "";
      localStorage.removeItem("profilePhoto");

      const currentUser = JSON.parse(
        localStorage.getItem("currentUser") || "{}"
      );
      currentUser.photo = "";

      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const index = users.findIndex(
        (u: any) => u.username === currentUser.username
      );
      if (index !== -1) {
        users[index].photo = "";
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  }
}
