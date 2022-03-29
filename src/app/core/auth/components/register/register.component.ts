import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import { LoadingService } from "../../services/loading.service";
import { UserService } from "../../services/user.service";

@Component({
    selector: "app-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
    public readonly isLoading$: Observable<boolean>;
    public form: FormGroup;

    constructor(
        private readonly userService: UserService,
        private readonly fb: FormBuilder,
        private readonly loadingService: LoadingService
    ) {
        this.form = this.fb.group({
            email: ["", [Validators.required, Validators.email]],
            password: ["", [Validators.required, Validators.minLength(6)]],
            confirmPassword: ["", [Validators.required, Validators.minLength(6)]]
        });
        this.isLoading$ = this.loadingService.isLoading$;
    }

    public onSubmit(): void {
        this.userService.register(this.form);
        this.form.reset();
    }

    public formValid(): boolean {
        return (
            this.form.get("email")?.valid! &&
            this.form.get("password")?.valid! &&
            this.form.get("confirmPassword")?.valid! &&
            this.form.get("password")?.value === this.form.get("confirmPassword")?.value
        );
    }
}
