import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/core/auth/services/user.service";
import { ProductData } from "../models/product-data";
import { ProductService } from "../services/product.service";
@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
    @Input() cart: ProductData[];
    public cart$: Observable<ProductData[]>;

    constructor(
        private readonly router: Router,
        private readonly userService: UserService,
        private readonly productService: ProductService
    ) {
        this.cart$ = this.productService.cart$;
    }

    public navigateTo(url: string): void {
        this.router.navigate([url]);
    }

    public logout(): void {
        this.userService.logout();
    }
}
