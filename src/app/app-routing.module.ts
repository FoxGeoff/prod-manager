import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProductsComponent } from './products/products.component';
// import { ProductShellComponent } from './products/product-shell/product-shell.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/* AppModuel Providers */
import { AuthGuard } from './auth/auth.guard'; // app.module

const routes: Routes = [

  { path: 'welcome', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'products', component: ProductsComponent,
    canActivate: [AuthGuard],
    // loadChildren: './products/product.module#ProductModule'
  },

  { path: '', component: WelcomeComponent, pathMatch: 'full' }, // redirect
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
