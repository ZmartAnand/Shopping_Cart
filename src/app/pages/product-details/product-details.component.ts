import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FirestoreService } from '../../../firestore.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, NavbarComponent, FooterComponent,RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  loading: boolean = true;
  product:any;
  cartItems: any;
  constructor(private route:ActivatedRoute , private firestoreService:FirestoreService,private cartService: CartService,){

  }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id')
    console.log('id',this.route)
    this.firestoreService.getProductById(id).subscribe((product:any)=>{
      this.product = product;
      console.log('product',product)
      this.loading = false;
    })

  
  }
  getStars(rating: number) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
    return {
      full: Array(fullStars).fill(0),
      half: hasHalfStar,
      empty: Array(emptyStars).fill(0),
    };
  }
  addtocart(product: any) {
    this.cartService.addToCart(product);
  }
  isInCart(product: any): boolean {
    this.cartItems = this.cartService.getCartItems();
    return this.cartItems.some((p: any) => p.id === product.id);
  }

}
