import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CartService } from "../../services/cart.service";
import { RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { signOut } from "firebase/auth";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent implements OnInit {
  cartCount = 0;
  isNavCollapsed = true;
  // searchTerm = "";
  @Output() filteredSearch = new EventEmitter<string>();

  constructor(
    private cartService: CartService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem("currentUser") || "{}");

    if (user?.username) {
      this.cartService.loadUserCart(user.username);
    }

    this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
    });
  }

  onSearch(event: Event) {
    console.log(
      "search",
      (event.target as HTMLInputElement).value.trim().toLowerCase()
    );
    const search = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    this.filteredSearch.emit(search);
  }
  logout() {
    this.authService.logout().then(() => {
      localStorage.removeItem("currentUser");
      alert("Logout successful");
      this.router.navigate(["/login"], { replaceUrl: true }); // prevents going back
    });
  }
}
