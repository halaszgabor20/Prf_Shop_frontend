import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/auth/guards/auth.guard";
import { HomeComponent } from "./home.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "products",
                loadChildren: () => import("./products/products.module").then(m => m.ProductsModule)
            },
            {
                path: "cart",
                loadChildren: () => import("./cart/cart.module").then(m => m.CartModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
