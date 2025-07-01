import { Routes } from "@angular/router";
import { SignupComponent } from "./pages/signup/signup.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { HomeComponent } from "./pages/home/home.component";
import { CartComponent } from "./pages/cart/cart.component";
import { AboutComponent } from "./pages/about/about.component";
import { EditProfileComponent } from "./pages/edit-profile/edit-profile.component";
import { ProductComponent } from "./pages/product/product.component";
import { OrderSuccessComponent } from "./pages/order-success/order-success.component";
import { authGuard } from "./auth.guard";
import { ForgotPasswordComponent } from "./pages/forgot-password/forgot-password.component";
import { loginGuard } from "./login.guard";
import { ProductDetailsComponent } from "./pages/product-details/product-details.component";
export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "signup", component: SignupComponent, canActivate: [loginGuard] },
  { path: "login", component: LoginComponent, canActivate: [loginGuard] },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
  },
  { path: "profile", component: ProfileComponent, canActivate: [authGuard] },
  {
    path: "edit-profile",
    component: EditProfileComponent,
    canActivate: [authGuard],
  },
  { path: "home", component: HomeComponent, canActivate: [authGuard] },
  { path: "product", component: ProductComponent },
  {path: "product/:id", component: ProductDetailsComponent},
  { path: "cart", component: CartComponent, canActivate: [authGuard] },
  { path: "about", component: AboutComponent, canActivate: [authGuard] },
  {
    path: "order-success",
    component: OrderSuccessComponent,
    canActivate: [authGuard],
  },
];
