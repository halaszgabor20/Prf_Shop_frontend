import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ProductData } from "../models/product-data";

@Injectable({ providedIn: "root" })
export class ProductService {
    private cartSubject = new BehaviorSubject<ProductData[]>([]);
    public cart$: Observable<ProductData[]>;

    constructor(private readonly http: HttpClient) {
        this.cart$ = this.cartSubject.asObservable();
    }

    public loadProducts(): Observable<ProductData[]> {
        return this.http.get<ProductData[]>(environment.backendURL + "/api/stuff/get-products").pipe(catchError(error => of(error)));
    }

    public loadCart(): Observable<ProductData[]> {
        return this.http.get<ProductData[]>(environment.backendURL + "/api/stuff/get-cart").pipe(
            tap(products => this.cartSubject.next(products)),
            catchError(error => of(error))
        );
    }

    public addToCart(productId: string): void {
        this.http
            .post<ProductData>(environment.backendURL + "/api/stuff/add-to-cart", {
                productId: productId
            })
            .pipe(
                tap(newItem => {
                    const newItemArray = [...this.cartSubject.value, newItem];
                    this.cartSubject.next(newItemArray);
                }),
                catchError(error => {
                    return of(error);
                })
            )
            .subscribe();
    }

    public removeProductFromCart(productId: string): void {
        this.http
            .delete<ProductData[]>(environment.backendURL + "/api/stuff/remove-from-cart/" + productId)
            .pipe(
                tap(newItems => {
                    this.cartSubject.next(newItems);
                }),
                catchError(error => {
                    return of(error);
                })
            )
            .subscribe();
    }

    public removeAllItemsFromCart(): void {
        if (this.cartSubject.value.length > 0) {
            this.http
                .delete(environment.backendURL + "/api/stuff/remove-all")
                .pipe(
                    tap(_ => {
                        this.cartSubject.next([]);
                    }),
                    catchError(error => {
                        return of(error);
                    })
                )
                .subscribe();
        }
    }
}
