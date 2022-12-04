import { DashboardCategoriesPageComponent } from './pages/dashboard-categories-page/dashboard-categories-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProductFormPageComponent } from './pages/product-form-page/product-form-page.component';
import { DashboardProductsPageComponent } from './pages/dashboard-products-page/dashboard-products-page.component';
import { CategoryFormPageComponent } from './pages/category-form-page/category-form-page.component';

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
          {
            path: '',
            pathMatch: 'full',
            component: DashboardProductsPageComponent,
          },
          { path: 'add', component: ProductFormPageComponent },
          { path: 'edit/:productId', component: ProductFormPageComponent },
        ], //# dashboard/products children route
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: DashboardCategoriesPageComponent,
          },
          { path: 'add', component: CategoryFormPageComponent },
          { path: 'edit/:categoryId', component: CategoryFormPageComponent },
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
