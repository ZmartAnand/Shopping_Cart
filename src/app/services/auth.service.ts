import { Injectable } from "@angular/core";
import { Auth, signInWithPopup, GoogleAuthProvider } from "@angular/fire/auth";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
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

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser") || "null");
  }
}
