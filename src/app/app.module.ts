import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AngularSvgIconModule } from "angular-svg-icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./core/auth/auth.interceptor";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, AngularSvgIconModule.forRoot(), BrowserAnimationsModule, HttpClientModule],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
    bootstrap: [AppComponent]
})
export class AppModule {}
