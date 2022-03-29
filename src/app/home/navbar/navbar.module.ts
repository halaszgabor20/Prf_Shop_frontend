import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AngularSvgIconModule } from "angular-svg-icon";
import { NavbarComponent } from "./navbar.component";

@NgModule({
    declarations: [NavbarComponent],
    imports: [CommonModule, HttpClientModule, RouterModule, AngularSvgIconModule],
    exports: [NavbarComponent]
})
export class NavbarModule {}
