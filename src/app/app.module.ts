import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Shared modules */
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

/* Feature Modules */
import { AppRoutingModule } from './app-routing.module';
// import { ProductModule } from './products/product.module';

/* Components */
import { AppComponent } from './app.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidnavComponent } from './navigation/sidnav/sidnav.component';

/* Provider Services */
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SidenavListComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SidnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    // ProductModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
