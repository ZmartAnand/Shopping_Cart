import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  query: string = "";
  searchResults: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params["q"] || "";
      if (this.query) {
        this.productService.searchProducts(this.query).subscribe((results) => {
          this.searchResults = results;
        });
      }
    });
  }
}
