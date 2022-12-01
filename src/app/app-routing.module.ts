import { ProductFormPageComponent } from './pages/product-form-page/product-form-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'category/:categoryId', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'dashboard', //# Grand parent route
    children: [
      {
        path: 'products', //# parent route
        children: [
          { path: 'add', component: ProductFormPageComponent },
          { path: 'edit/:productId', component: ProductFormPageComponent },
        ], //# dashboard/products children route
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
