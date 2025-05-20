import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  imports: [CommonModule, RouterLink],
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
      price: 199.99,
      rating: 4.5,
      reviews: 128,
      image: "https://m.media-amazon.com/images/I/71meEZBQieL._SX522_.jpg",
      badge: "sale",
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      description: "Fitness tracker with heart rate monitor and GPS",
      price: 1.399,
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
      price: 24.7,
      rating: 5,
      reviews: 42,
      image:
        "https://m.media-amazon.com/images/I/31onMzvkznL._SX300_SY300_QL70_FMwebp_.jpg",
      badge: "new",
    },
    {
      id: 4,
      name: "Wireless Charging Pad",
      description: "Fast charging pad compatible with all Qi devices",
      price: 3.499,
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
      price: 1.599,
      rating: 4.2,
      reviews: 110,
      image: "https://m.media-amazon.com/images/I/81Dl7qzd40L._SX522_.jpg",
      badge: "sale",
    },
    {
      id: 6,
      name: "Noise Cancelling Earbuds",
      description: "Lightweight earbuds with crystal-clear sound",
      price: 7.499,
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
      badge: "new",
    },
    {
      id: 8,
      name: "Ultra Slim Laptop Stand",
      description: "Ergonomic aluminum stand for better posture",
      price: 1.499,
      rating: 4.4,
      reviews: 58,
      image: "https://m.media-amazon.com/images/I/61PxL5wsFNL._SX679_.jpg",
      badge: null,
    },
    {
      id: 9,
      name: "USB-C Hub 6-in-1",
      description: "Multi-port adapter with HDMI and Ethernet support",
      price: 846,
      rating: 4.3,
      reviews: 67,
      image: "https://m.media-amazon.com/images/I/61ZujDyiFwL._SX679_.jpg",
      badge: "sale",
    },
    {
      id: 10,
      name: "Portable SSD 1TB",
      description: "High-speed external storage with USB 3.1",
      price: 10.999,
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
      price: 129.99,
      rating: 4.0,
      reviews: 43,
      image: "https://m.media-amazon.com/images/I/81hgjKwsdHL._SL1500_.jpg",
      badge: "new",
    },
    {
      id: 12,
      name: "Fitness Smart Ring",
      description: "Track your sleep, steps, and heart rate with style",
      price: 13.499,
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
      price: 1.849,
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
      badge: "sale",
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
      description: "Control brightness and color with your phone",
      price: 589,
      rating: 4.4,
      reviews: 55,
      image: "https://m.media-amazon.com/images/I/51T0RbnCy6L._SX679_.jpg",
      badge: "new",
    },
    {
      id: 17,
      name: "Laptop Cooling Pad",
      description: "Quiet fan system for cooler performance",
      price: 2.499,
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
      badge: "sale",
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
      badge: "new",
    },
  ];

  cartCount = 2;
  filteredProducts = this.products;
  isNavCollapsed = true;

  constructor() {
    console.log("first commite");
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

  search(term: string) {
    if (!term) {
      this.filteredProducts = this.products;
      return;
    }

    term = term.toLowerCase();
    this.filteredProducts = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
    );
  }

  clearSearch(searchInput: HTMLInputElement) {
    searchInput.value = "";
    this.search("");
  }
}
