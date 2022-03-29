import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/core/auth/services/user.service";

@Component({
    selector: "app-not-found",
    templateUrl: "./not-found.component.html",
    styleUrls: ["./not-found.component.scss"]
})
export class NotFoundComponent {
    constructor(private readonly router: Router, private readonly userService: UserService) {}

    goBack() {
        let newRoute = "/";
        if (this.userService.currentUserValue?.userId) {
            newRoute = "/home/products";
        }
        this.router.navigate([newRoute]);
    }
}
