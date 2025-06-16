import { Injectable } from "@angular/core";
import { Auth, signInWithPopup, GoogleAuthProvider } from "@angular/fire/auth";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { Router } from "@angular/router";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private auth: Auth, private router: Router) {}

  signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout() {
    return signOut(this.auth);
  }
  resetPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }

  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);

      const user = result.user;
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || "User",
        photoURL:
          user.photoURL || "https://www.w3schools.com/howto/img_avatar.png",
      };

      localStorage.setItem("currentUser", JSON.stringify(userData));
      this.router.navigate(["/home"]);
    } catch (error) {
      console.error("Google login failed:", error);
      alert("Google login failed");
    }
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  }
}
