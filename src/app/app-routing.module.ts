import { DashboardCategoriesPageComponent } from './features/category/pages/dashboard-categories-page/dashboard-categories-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { LoginPageComponent } from './shared/pages/login-page/login-page.component';
import { ProductFormPageComponent } from './features/product/pages/product-form-page/product-form-page.component';
import { DashboardProductsPageComponent } from './features/product/pages/dashboard-products-page/dashboard-products-page.component';
import { CategoryFormPageComponent } from './features/category/pages/category-form-page/category-form-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
