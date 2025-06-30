import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Auth } from "@angular/fire/auth";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: "app-profile",
  imports: [RouterLink, NavbarComponent, FooterComponent],
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  user: any;
  avatarUrl: string = "";
  uploadedPhoto: string | ArrayBuffer | null = null;
  defaultAvatar = "https://www.w3schools.com/howto/img_avatar.png";

  constructor(private auth: Auth) {
    // super()
  }
  ngOnInit(): void {
    const currentUser = localStorage.getItem("currentUser");
    if(currentUser){
      this.user = JSON.parse(currentUser);
      this.user.name = this.user?.displayName || this.user?.username || this.user?.user?.email.split("@")[0];

      console.log('upload', this.user)
    }


    // const currentUserString = localStorage.getItem("currentUser");
    // if (currentUserString) {
    //   try {
    //     this.user = JSON.parse(currentUserString);
    //     // console.log("user", this.user);
    //     this.user.name =
    //       this.user.displayName ||
    //       this.user.username ||
    //       this.user.user.email.split("@")[0];

    //     this.uploadedPhoto = this.user.photoURL || this.defaultAvatar;
    //     console.log('upload', this.uploadedPhoto)

    //   }
    //   catch (error) {
    //     console.error("Error parsing currentUser:", error);
    //   }
    // } else {
    //   this.user = { username: "User" };
    //   this.uploadedPhoto = this.defaultAvatar;
    // }
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
