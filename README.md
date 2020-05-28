# ProdManager

Based on APM Project (Angular Communications)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Task: Add: Angular Material

* <https://material.angular.io/guide/getting-started>
* Run Command: ```ng add @angular/material```

### Task: Add: Material Module

* **NB Requires VSCode restart to show the Material Effects**

## Task: Add: Angular flex layout

* <https://github.com/angular/flex-layout>
* Run Command: ```npm i -s @angular/flex-layout @angular/cdk```
* Next Run:

```TypeScript
import { FlexLayoutModule } from '@angular/flex-layout';
...

@NgModule({
    ...
    imports: [ FlexLayoutModule ],
    ...
});

```

* Flex Layout API: <https://github.com/angular/flex-layout/wiki/Declarative-API-Overview>
* FLex Layout Responsive API: <https://github.com/angular/flex-layout/wiki/Responsive-API>

## Task: Add: Sidenav to app.component

## Task: Add: sidenav-list component

## Task: Add: AuthService, Code: Sidenav component

## Task: Add: user and auth models

## Task: Add: routing

## Task: Add: Welcome component

## Task: Add: Login component

## Task: Add: Signup component

## Task: Add: AuthGuard class

* Note add the app.module: ```providers: [AuthService, AuthGuard],```
* For 404 page: ```{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page```

## Task: Add: Products component

## Task: Add: PageNotFound component

## Task: Add: Angular Material BreakpointObserver

* API: <https://material.angular.io/cdk/layout/overview>
* Google standard: <https://material.io/design/layout/responsive-layout-grid.html#breakpoints>

### Next Steps

* Conditional behaviour on phone slide navbar on item select
* Add product list table
* Add NgRx
* Add Testing
* Add Health Checks
* Use Rest API asp.net core 3.1
