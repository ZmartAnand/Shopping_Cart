import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs,
  query,
  setDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private collectionRef: any;

  constructor(private firestore: Firestore) {
    this.collectionRef = collection(this.firestore, 'products');
  }

  getProducts(): Observable<any[]> {
    const q = query(this.collectionRef);
    return from(
      getDocs(q).then((snapshot: { docs: any[] }) =>
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as any))
      )
    );
  }

  addProduct(product: any): Promise<void> {
    const id = doc(this.collectionRef).id;
    return setDoc(doc(this.firestore, `products/${id}`), {
      ...product,
      id,
    });
  }

  getProductById(id: string): Observable<any | undefined> {
    const docRef = doc(this.firestore, `products/${id}`);
    return from(
      getDoc(docRef).then((doc: { exists: () => any; data: () => any }) =>
        doc.exists() ? ({ ...doc.data(), id } as any) : undefined
      )
    );
  }

  deleteProduct(id: string): Promise<void> {
    const docRef = doc(this.firestore, `products/${id}`);
    return deleteDoc(docRef);
  }
}
