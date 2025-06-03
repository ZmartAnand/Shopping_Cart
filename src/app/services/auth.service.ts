import { Injectable } from "@angular/core";
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      localStorage.setItem("currentUser", JSON.stringify(result.user));
      this.router.navigate(["/home"]);
    } catch (error) {
      console.error("Google login failed:", error);
      alert("Google login failed");
    }
  }

  logout() {
    signOut(this.auth).then(() => {
      localStorage.removeItem("currentUser");
      this.router.navigate(["/login"]);
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  }
}
