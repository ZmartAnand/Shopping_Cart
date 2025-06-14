import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { FirestoreService } from "../../../firestore.service";

@Component({
  selector: "app-add-product",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent {
  product = {
    name: "",
    description: "",
    price: null,
    image: "",
  };

  constructor(
    private router: Router,
    private firestoreService: FirestoreService
  ) {}

  addProduct() {
    this.firestoreService.addProduct(this.product).then(() => {
      console.log("product", this.product);
      this.router.navigate(["/home"]);
    });

    // const storedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    // const nextId =
    //   storedProducts.length > 0
    //     ? Math.max(...storedProducts.map((product: any) => product.id)) + 1
    //     : 1;
    // const newProduct = {
    //   ...this.product,
    //   id: nextId,
    //   rating: 4,
    //   reviews: 0,
    //   badge: null,
    // };
    // storedProducts.push(newProduct);
    // localStorage.setItem("products", JSON.stringify(storedProducts));
    // this.product = {
    //   name: "",
    //   description: "",
    //   price: null,
    //   image: "",
    // };
    // this.router.navigate(["/home"]);
  }
}
