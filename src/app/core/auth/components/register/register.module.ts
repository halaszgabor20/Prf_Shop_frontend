import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from "./register.component";
import { RegisterRoutingModule } from "./register-routing.module";
import { AngularSvgIconModule } from "angular-svg-icon";

@NgModule({
    declarations: [RegisterComponent],
    imports: [CommonModule, RegisterRoutingModule, ReactiveFormsModule, RouterModule, AngularSvgIconModule],
    providers: [],
    bootstrap: [RegisterComponent]
})
export class RegisterModule {}
