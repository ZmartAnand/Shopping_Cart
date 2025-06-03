import { Routes } from "@angular/router";
import { SignupComponent } from "./pages/signup/signup.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { HomeComponent } from "./pages/home/home.component";
import { CartComponent } from "./pages/cart/cart.component";
import { AboutComponent } from "./pages/about/about.component";
import { EditProfileComponent } from "./pages/edit-profile/edit-profile.component";
// import { SearchComponent } from "./pages/search/search.component";
import { ProductComponent } from "./pages/product/product.component";
import { OrderSuccessComponent } from "./pages/order-success/order-success.component";

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  // { path: "search", component: SearchComponent },
  { path: "profile", component: ProfileComponent },
  { path: "edit-profile", component: EditProfileComponent },
  { path: "home", component: HomeComponent },
  { path: "product", component: ProductComponent },
  { path: "cart", component: CartComponent },
  { path: "about", component: AboutComponent },
  { path: "order-success", component: OrderSuccessComponent },
];
