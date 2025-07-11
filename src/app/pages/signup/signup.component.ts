import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { PhoneNumberUtil } from 'google-libphonenumber';
@Component({
  selector: "app-signup",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent {
  username = "";
  email = "";
  mobile = "";
  address = "";
  gender = "";
  password = "";
  confirmPassword = "";
  countryCode: string = '+91';
  constructor(
    private router: Router,
    private login: Router,
    private auth: AuthService
  ) {}


  phoneUtil = PhoneNumberUtil.getInstance();

  // Map region to country code for reverse mapping
  allowedRegions: string[] = ['IN', 'US', 'AE', 'AU', 'GB'];

regionToDialCode: Record<string, string> = {
  IN: '+91',
  US: '+1',
  AE: '+971',
  AU: '+61',
  GB: '+44',
  QA: '+974',
};

  onMobileChange() {
    try {
      let number;
  
      // If number starts with '+', parse without default region
      if (this.mobile.startsWith('+')) {
        number = this.phoneUtil.parse(this.mobile);
      } else {
        // Default to 'IN' for parsing
        number = this.phoneUtil.parse(this.mobile, 'IN');
      }
  
      const regionCode = this.phoneUtil.getRegionCodeForNumber(number);
  
      if (
        regionCode &&
        this.allowedRegions.includes(regionCode) &&
        this.regionToDialCode[regionCode]
      ) {
        this.countryCode = this.regionToDialCode[regionCode];
      }
    } catch (error) {
      // invalid number; skip
    }
  }

  signup() {
    if (this.password !== this.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (this.email && this.password === this.confirmPassword) {
      this.auth
        .signup(this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;

          const userData = {
            uid: user.uid,
            username: this.username,
            email: this.email,
            mobile: this.mobile,
            address: this.address,
            gender: this.gender,
            photo: "",
          };

          localStorage.setItem("currentUser", JSON.stringify(userData));

          // alert("Welcome to ASShopping Cart");
          this.router.navigate(["/login"]);
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            alert(
              "This email is already registered. Please login or use another email."
            );
          } else {
            alert("Signup failed: " + error.message);
          }
          console.error("Signup failed:", error);
        });
    }
  }

  movetologin() {
    this.login.navigate(["login"]);
  }
}
