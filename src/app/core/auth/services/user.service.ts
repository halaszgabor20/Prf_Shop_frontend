import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { environment } from "src/environments/environment";
import { UserData } from "../models/user-data";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { UserUtils } from "../utils/user.utils";
import { LoadingService } from "./loading.service";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class UserService {
    private currentUserSubject: BehaviorSubject<UserData>;
    public currentUser$: Observable<UserData>;
    constructor(private readonly http: HttpClient, private readonly loadingService: LoadingService, private readonly router: Router) {
        this.currentUserSubject = new BehaviorSubject<UserData>(JSON.parse(localStorage.getItem("userData")));
        this.currentUser$ = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): UserData {
        return this.currentUserSubject.value;
    }

    public login(form: FormGroup): void {
        this.loadingService.loadingSubject.next(true);
        this.http
            .post<UserData>(environment.backendURL + "/api/user/login", {
                email: form.value.email,
                password: form.value.password
            })
            .pipe(
                map(response => {
                    this.loadingService.loadingSubject.next(false);
                    this.currentUserSubject.next(response);
                    return UserUtils.saveUserData(response);
                }),
                catchError(error => {
                    this.loadingService.loadingSubject.next(false);
                    return of(error);
                })
            )
            .subscribe(_ => {
                this.router.navigate(["/home/products"]);
            });
    }

    public register(form: FormGroup): void {
        this.loadingService.loadingSubject.next(true);
        this.http
            .post<any>(environment.backendURL + "/api/user/register", {
                email: form.value.email,
                password: form.value.password
            })
            .subscribe(_ => {
                this.loadingService.loadingSubject.next(false);
                this.router.navigate(["/login"]);
            });
    }

    public logout(): void {
        localStorage.clear();
        this.currentUserSubject.next(null);
        this.router.navigate(["/login"]);
    }
}
