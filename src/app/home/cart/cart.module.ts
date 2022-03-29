import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CartComponent } from "./cart.component";
import { CartRoutingModule } from "./cart-routing.module";

@NgModule({
    declarations: [CartComponent],
    imports: [CommonModule, CartRoutingModule, RouterModule],
    providers: [],
    bootstrap: [CartComponent]
})
export class CartModule {}
