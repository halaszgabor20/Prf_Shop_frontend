import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ProductData } from "../models/product-data";
import { ProductService } from "../services/product.service";

@Component({
    selector: "app-products",
    templateUrl: "./products.component.html",
    styleUrls: ["./products.component.scss"]
})
export class ProductsComponent {
    public products$: Observable<ProductData[]>;

    constructor(private readonly productService: ProductService) {
        this.products$ = this.productService.loadProducts();
    }

    public addToCart(productId: string) {
        this.productService.addToCart(productId);
    }
}
