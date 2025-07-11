import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Auth,confirmPasswordReset } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  newPassword: string = '';
  oobCode: string = '';
  loading: boolean = false;

  private auth: Auth = inject(Auth);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
success: any;
error: any;

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.oobCode = params['oobCode'];
    });
  }

  resetPassword() {
    if (!this.newPassword || this.newPassword.length < 6) {
      alert('Please enter a valid password (at least 6 characters).');
      return;
    }

    this.loading = true;

    confirmPasswordReset(this.auth, this.oobCode, this.newPassword)
      .then(() => {
        this.loading = false;
        alert(' Password reset successful! You can now log in with your new password.');
        this.router.navigate(['/login']);
      })
  }
}
