import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { NotFoundComponent } from "./not-found.component";
import { NotFoundRoutingModule } from "./not-found.routing.module";

@NgModule({
    declarations: [NotFoundComponent],
    imports: [CommonModule, RouterModule, NotFoundRoutingModule],
    providers: [],
    bootstrap: [NotFoundComponent]
})
export class NotFoundModule {}
