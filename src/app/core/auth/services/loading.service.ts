import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class LoadingService {
    public loadingSubject = new BehaviorSubject<boolean>(false);
    public isLoading$: Observable<boolean>;
    constructor() {
        this.isLoading$ = this.loadingSubject.asObservable();
    }
}
