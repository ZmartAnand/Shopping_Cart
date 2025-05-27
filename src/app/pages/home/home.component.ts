import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { NavbarComponent } from "../../navbar/navbar.component";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-home",
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  currentYear = new Date().getFullYear();
  products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description:
        "Noise cancelling wireless headphones with 30hr battery life",
      price: 19999,
      rating: 4.5,
      reviews: 128,
      image: "https://m.media-amazon.com/images/I/71meEZBQieL._SX522_.jpg",
      badge: null,
    },
    {
      id: 2,
      name: "Smart Watch Ultra Pro",
      description: "Fitness tracker with heart rate monitor and GPS",
      price: 1399,
      rating: 4,
      reviews: 64,
      image:
        "https://m.media-amazon.com/images/I/41gLj+50LFL._SY300_SX300_.jpg",
      badge: null,
    },
    {
      id: 3,
      name: "4K Ultra HD Camera",
      description: "Professional camera with 4K video and 20MP photos",
      price: 24999,
      rating: 5,
      reviews: 42,
      image:
        "https://m.media-amazon.com/images/I/31onMzvkznL._SX300_SY300_QL70_FMwebp_.jpg",
      badge: null,
    },
    {
      id: 4,
      name: "Wireless Charging Pad",
      description: "Fast charging pad compatible with all Qi devices",
      price: 3499,
      rating: 4.5,
      reviews: 87,
      image:
        "https://m.media-amazon.com/images/I/41JRJlMnezL._SX300_SY300_QL70_FMwebp_.jpg",
      badge: null,
    },
    {
      id: 5,
      name: "Bluetooth Speaker Mini",
      description: "Compact speaker with powerful sound and deep bass",
      price: 1599,
      rating: 4.2,
      reviews: 110,
      image: "https://m.media-amazon.com/images/I/81Dl7qzd40L._SX522_.jpg",
      badge: null,
    },
    {
      id: 6,
      name: "Noise Cancelling Earbuds",
      description: "Lightweight earbuds with crystal-clear sound",
      price: 7499,
      rating: 4.1,
      reviews: 76,
      image: "https://m.media-amazon.com/images/I/6157hOQ82xL._SX522_.jpg",
      badge: null,
    },
    {
      id: 7,
      name: "Gaming Keyboard RGB",
      description: "Mechanical keyboard with customizable RGB lights",
      price: 999,
      rating: 4.8,
      reviews: 142,
      image:
        "https://m.media-amazon.com/images/I/41eGK1l-4ZL._SX300_SY300_QL70_FMwebp_.jpg",
      badge: null,
    },
    {
      id: 8,
      name: "Ultra Slim Laptop Stand",
      description: "Ergonomic aluminum stand for better posture",
      price: 1499,
      rating: 4.4,
      reviews: 58,
      image: "https://m.media-amazon.com/images/I/61PxL5wsFNL._SX679_.jpg",
      badge: null,
    },
    {
      id: 9,
      name: "USB-C Hub 6-in-1, Multi-port",
      description: "Multi-port adapter with HDMI and Ethernet support",
      price: 899,
      rating: 4.3,
      reviews: 67,
      image: "https://m.media-amazon.com/images/I/61ZujDyiFwL._SX679_.jpg",
      badge: null,
    },
    {
      id: 10,
      name: "Portable SSD 1TB,external storage",
      description: "High-speed external storage with USB 3.1, portable SSD",
      price: 10999,
      rating: 4.7,
      reviews: 95,
      image:
        "https://m.media-amazon.com/images/I/41F0LwCmDJL._SX300_SY300_QL70_FMwebp_.jpg",
      badge: null,
    },
    {
      id: 11,
      name: "Echo Dot (5th Gen) | Smart speaker",
      description: "Control all your smart devices from one place",
      price: 12999,
      rating: 4.0,
      reviews: 43,
      image: "https://m.media-amazon.com/images/I/81hgjKwsdHL._SL1500_.jpg",
      badge: null,
    },
    {
      id: 12,
      name: "Fitness Smart Ring",
      description: "Track your sleep, steps, and heart rate with style",
      price: 13499,
      rating: 3.9,
      reviews: 31,
      image:
        "https://m.media-amazon.com/images/I/31a3A4C-BmL._SX300_SY300_QL70_FMwebp_.jpg",
      badge: null,
    },
    {
      id: 13,
      name: "1080p Webcam with Microphone",
      description: "Perfect for video calls and streaming",
      price: 1999,
      rating: 4.5,
      reviews: 77,
      image: "https://m.media-amazon.com/images/I/51MMjou1HTL._SX522_.jpg",
      badge: null,
    },
    {
      id: 14,
      name: "Wireless Ergonomic Mouse",
      description: "Comfortable grip with long battery life",
      price: 649,
      rating: 4.2,
      reviews: 88,
      image:
        "https://m.media-amazon.com/images/I/31cZyGba6IL._SX300_SY300_QL70_FMwebp_.jpg",
      badge: null,
    },
    {
      id: 15,
      name: "Mechanical Gaming Mousepad",
      description: "Extra large mousepad with smooth surface",
      price: 999,
      rating: 4.6,
      reviews: 46,
      image: "https://m.media-amazon.com/images/I/71Z3lINjEdL._SX679_.jpg",
      badge: null,
    },
    {
      id: 16,
      name: "wipro 9-Watt B22 WiFi Smart LED Bulb",
      description: "Control brightness color with your phone",
      price: 589,
      rating: 4.4,
      reviews: 55,
      image: "https://m.media-amazon.com/images/I/51T0RbnCy6L._SX679_.jpg",
      badge: null,
    },
    {
      id: 17,
      name: "Laptop Cooling Pad",
      description: "Quiet fan system for cooler performance",
      price: 2499,
      rating: 4.1,
      reviews: 39,
      image:
        "https://m.media-amazon.com/images/I/51wczViqokL._SX300_SY300_QL70_FMwebp_.jpg",
      badge: null,
    },
    {
      id: 18,
      name: "Adjustable Phone Stand",
      description: "Foldable stand for phones and tablets",
      price: 499,
      rating: 4.3,
      reviews: 62,
      image:
        "https://m.media-amazon.com/images/I/41YKY64LYpL._SX300_SY300_QL70_FMwebp_.jpg",
      badge: null,
    },
    {
      id: 19,
      name: "Dual Monitor Mount",
      description: "Flexible arm mount for 2 screens",
      price: 2999,
      rating: 4.7,
      reviews: 70,
      image:
        "https://m.media-amazon.com/images/I/41JqtP+1LxL._SY300_SX300_.jpg",
      badge: null,
    },
    {
      id: 20,
      name: "Wireless Presentation Remote",
      description: "Clicker for slideshows with laser pointer",
      price: 599,
      rating: 4.0,
      reviews: 28,
      image:
        "https://m.media-amazon.com/images/I/41N-ZNnbEVL._SX300_SY300_QL70_FMwebp_.jpg",
      badge: null,
    },
  ];
  cartItems: any;

  constructor(private router: Router, private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }
  isInCart(product: any): boolean {
    return this.cartItems.some((p: any) => p.id === product.id);
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
}
