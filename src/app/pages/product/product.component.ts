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
    price: "",
    rating: "",
    reviews: "",
    image: "",
  };

  // products: any = [
  //     {
  //       id: 21,
  //       name: "HD Projector",
  //       description: "High-definition projector for home theater experience",
  //       price: 6399,
  //       rating: 4.6,
  //       reviews: 89,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/projector/g/8/o/beem-440-smart-led-projector-with-720p-hd-resolution-12-por-2106-original-imah2kxy3k3qa5aw.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 22,
  //       name: "Electric Kettle 1.5L",
  //       description: "Fast boiling stainless steel electric kettle",
  //       price: 1299,
  //       rating: 4.2,
  //       reviews: 34,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/electric-kettle/h/b/8/durahot-kettle-1500w-ekdh15bp-durahot-cool-touch-orient-electric-original-imah57r6hshtbzje.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 23,
  //       name: "Smart Light Strip",
  //       description: "Color-changing LED strip with app control",
  //       price: 699,
  //       rating: 4.4,
  //       reviews: 76,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smart-lighting/i/f/r/50-rgb-led-light-strip-led-sparkworld-original-imahyfypxtzcufxt.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 24,
  //       name: "Wireless Charging Stand",
  //       description: "Fast wireless charger for phone and smartwatch",
  //       price: 799,
  //       rating: 4.5,
  //       reviews: 58,
  //       image: "https://rukminim2.flixcart.com/image/612/612/l4x2rgw0/charging-pad/a/4/6/15-wireless-charger-stand-for-oneplus-10-pro-9-pro-8-pro-mars-original-imagfpznxhzp2kgg.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 25,
  //       name: "Laptop Sleeve 15.6",
  //       description: "Slim and stylish laptop sleeve with extra padding",
  //       price: 299,
  //       rating: 4.3,
  //       reviews: 91,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/bags/laptop-backpack/8/p/w/laptop-bag-sleeve-for-15-6-16-inch-laptop-case-cover-pro-with-original-imahc8g2txadu2qy.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 26,
  //       name: "HDMI to VGA Adapter",
  //       description: "High quality adapter for HDMI to VGA conversion",
  //       price: 399,
  //       rating: 4.0,
  //       reviews: 36,
  //       image: "https://rukminim2.flixcart.com/image/612/612/kjhgzgw0-0/tv-out-cable/convertor-adapter-cable/d/a/7/hdmi-to-vga-convertor-with-sound-terabyte-original-imafzfenfkpmafmc.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 27,
  //       name: "Car Phone Mount",
  //       description: "Adjustable dashboard mount for smartphones",
  //       price: 799,
  //       rating: 4.1,
  //       reviews: 44,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/car-cradle/windshield/e/3/m/vacuum-suction-phone-mount-for-car-wireless-stand-magnetic-360-original-imahcjskpsszhf85.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 28,
  //       name: "Foldable Laptop Table",
  //       description: "Multipurpose laptop table with cup holder",
  //       price: 999,
  //       rating: 4.4,
  //       reviews: 102,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/portable-laptop-table/f/9/y/60-plywood-lt4001-story-home-30-walnut-original-imahba4ajnmcsn8y.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 29,
  //       name: "Mini Tripod Stand",
  //       description: "Portable tripod for mobile and camera",
  //       price: 349,
  //       rating: 4.0,
  //       reviews: 65,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-tripod/8/j/3/150-yt-228-mini-tripod-for-all-mobile-phones-action-dslr-camera-original-imah4xa3yzf3ezhe.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 30,
  //       name: "USB Desk Fan",
  //       description: "Compact USB fan for desk or bedside use",
  //       price: 1899,
  //       rating: 4.3,
  //       reviews: 59,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/usb-gadget/h/6/v/clip-fan-with-led-light-3-speed-360-rotation-4-6-hrs-battery-original-imahcysrgftyjyxg.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 31,
  //       name: "Wireless Numeric Keypad",
  //       description: "Bluetooth number pad for laptop users",
  //       price: 699,
  //       rating: 4.2,
  //       reviews: 31,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard-replacement-key/c/p/k/17-wired-numeric-keypad-slim-mini-number-pad-keyboard-numpad-original-imahabh9amgjmm85.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 32,
  //       name: "Smart Plug with Energy Monitor",
  //       description: "Control devices remotely and monitor usage",
  //       price: 299,
  //       rating: 4.5,
  //       reviews: 78,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smart-switch/s/s/l/10a-wifi-smart-plug-with-energy-monitoring-works-with-alexa-original-imah4mfgkcxyufsh.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 33,
  //       name: "Gaming Headset with Mic",
  //       description: "Surround sound and noise-canceling mic",
  //       price: 999,
  //       rating: 4.6,
  //       reviews: 84,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/n/v/m/k20-headset-over-ear-headphones-with-mic-punnkfunnk-original-imaha6fcnfdz3yxd.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 34,
  //       name: "Ergonomic Back Support Pillow",
  //       description: "Memory foam pillow for chair and car seat",
  //       price: 1199,
  //       rating: 4.1,
  //       reviews: 38,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/support/r/s/e/na-orthopedic-back-rest-cushion-for-chair-car-seat-memory-foam-original-imah9h7wznrarrw6.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 35,
  //       name: "Adjustable Ring Light",
  //       description: "Perfect for video calls and content creation",
  //       price: 599,
  //       rating: 4.4,
  //       reviews: 72,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/flash/ring-flash/q/n/c/10-inch-led-rgb-ring-light-with-mobile-mount-for-youtube-video-original-imahy8bxzagmsf73.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 36,
  //       name: "USB Flash Drive 128GB",
  //       description: "Fast and portable USB 3.0 storage",
  //       price: 499,
  //       rating: 4.3,
  //       reviews: 90,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/pendrive/pendrive/g/f/a/flash-drive-hp-original-imagzbe3qqpv4xz9.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 37,
  //       name: "Portable Laptop Stand",
  //       description: "Foldable and height adjustable stand",
  //       price: 1349,
  //       rating: 4.4,
  //       reviews: 47,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/laptop-stand/l/a/a/980-10-rgb-customizations-aluminium-alloy-ventilated-board-original-imagr8474h9yhbtg.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 38,
  //       name: "Digital Alarm Clock",
  //       description: "LED display clock with temperature and USB port",
  //       price: 1599,
  //       rating: 4.2,
  //       reviews: 42,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/smart-speaker/w/n/z/picstar-bt-speaker-rgb-light1-picstar-original-imaguexhdzshmnge.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 39,
  //       name: "Laptop Cleaning Kit",
  //       description: "Complete cleaning tools for electronics",
  //       price: 199,
  //       rating: 4.5,
  //       reviews: 61,
  //       image: "https://rukminim2.flixcart.com/image/612/612/xif0q/cleaning-kit/q/6/y/3in1-cleaning-set-for-pc-laptops-mobiles-led-screen-cleaner-with-original-imah79mxf2xby9pt.jpeg?q=70",
  //       badge: null,
  //     },
  //     {
  //       id: 40,
  //       name: "Mini Bluetooth Tracker",
  //       description: "Track your keys, wallet or phone via app",
  //       price: 599,
  //       rating: 4.1,
  //       reviews: 35,
  //       image: "https://rukminim2.flixcart.com/image/612/612/jvjugsw0/smart-tracker/h/2/f/bluetooth-tracker-by-silver-peach-to-locate-keys-dog-pets-wallet-original-imafgfhmh8rqdwwn.jpeg?q=70",
  //       badge: null,
  //     }
  //   ];
    

  constructor(
    private router: Router,
    private firestoreService: FirestoreService
  ) {}

  addProduct() {
    // console.log('productss',this.products)

    //All product added using by this script....

    // this.products.forEach((p:any) => {
    //   this.firestoreService.addProduct(p).then(()=>{
    //     console.log('added',p)
    //     this.router.navigate(['/home'])
    //   })
      
    // });

    // All one - one product
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
