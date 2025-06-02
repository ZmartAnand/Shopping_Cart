import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { provideHttpClient } from "@angular/common/http";
import { provideAuth, getAuth } from "@angular/fire/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiBF_eMVYMlH87Xu7JByn847LNFfcX_DE",
  authDomain: "asshopping-app.firebaseapp.com",
  projectId: "asshopping-app",
  storageBucket: "asshopping-app.firebasestorage.app",
  messagingSenderId: "997755760489",
  appId: "1:997755760489:web:6d872809f729280cff57f8",
  measurementId: "G-3LMK735PG8",
};

export const appConfig = [
  provideRouter(routes),
  provideFirebaseApp(() => initializeApp(firebaseConfig)),
  provideHttpClient(),
  provideAuth(() => getAuth()),
];
