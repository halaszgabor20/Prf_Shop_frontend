import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products.component";
import { AngularSvgIconModule } from "angular-svg-icon";

@NgModule({
    declarations: [ProductsComponent],
    imports: [CommonModule, ProductsRoutingModule, RouterModule, AngularSvgIconModule],
    providers: [],
    bootstrap: [ProductsComponent]
})
export class ProductsModule {}
