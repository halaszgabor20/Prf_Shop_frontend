import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AngularSvgIconModule } from "angular-svg-icon";

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule, RouterModule, AngularSvgIconModule],
    providers: [],
    bootstrap: [LoginComponent]
})
export class LoginModule {}
