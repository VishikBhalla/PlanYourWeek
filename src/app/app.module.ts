import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';

@NgModule({
    imports: [BrowserModule,  AppRoutingModule],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    // exports: [
    //   AppComponent,
    //     HomeComponent,
    //     LoginComponent
    // ],
    bootstrap: [AppComponent]
})
export class AppModule { };