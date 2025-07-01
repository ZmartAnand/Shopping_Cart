import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  getProduct(productId: string) {
    throw new Error('Method not implemented.');
  }
  getProductById(id: any) {
    throw new Error('Method not implemented.');
  }
  deleteProduct(arg0: any) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = "http://localhost:3000/products"; // JSON Server

  constructor(private http: HttpClient) {}

  searchProducts(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?q=${query}`);
  }
}
