import { Component } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-forgot-password",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: "./forgot-password.component.html",
})
export class ForgotPasswordComponent {
  loading = false;
  success = "";
  error = "";
  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
    });
  }

  resetPassword() {
    this.success = "";
    this.error = "";
    if (this.form.invalid) return;

    const email = this.form.value.email!;
    this.loading = true;

    this.auth
      .resetPassword(email)
      .then(() => {
        this.success = "Password reset email sent!";
      })
      .catch((err) => {
        if (err.code === "auth/user-not-found") {
          this.error = "No account found with this email.";
        } else {
          this.error = err.message;
        }
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
