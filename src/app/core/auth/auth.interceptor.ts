import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoadingService } from "./services/loading.service";
import { UserService } from "./services/user.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private userService: UserService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.userService.currentUserValue?.token;
        if (authToken) {
            const authRequest = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + authToken)
            });
            return next.handle(authRequest);
        }
        return next.handle(req);
    }
}
