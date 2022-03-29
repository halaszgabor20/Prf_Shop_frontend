import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import { take } from "rxjs/operators";
import { LoadingService } from "../../services/loading.service";
import { UserService } from "../../services/user.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
    public readonly isLoading$: Observable<boolean>;
    public form: FormGroup;

    constructor(
        private readonly fb: FormBuilder,
        private readonly userService: UserService,
        private readonly loadingService: LoadingService
    ) {
        this.form = this.fb.group({
            email: ["", [Validators.required, Validators.email]],
            password: ["", [Validators.required, Validators.minLength(6)]]
        });
        this.isLoading$ = this.loadingService.isLoading$;
    }

    public onSubmit(): void {
        this.userService.login(this.form);
        this.form.reset();
    }
}
