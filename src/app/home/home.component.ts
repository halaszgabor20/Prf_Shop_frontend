import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProductData } from "./models/product-data";
import { ProductService } from "./services/product.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    public cart$: Observable<ProductData[]>;
    constructor(private readonly productService: ProductService) {
        this.cart$ = this.productService.cart$;
    }

    public ngOnInit(): void {
        this.productService.loadCart().subscribe();
    }
}
