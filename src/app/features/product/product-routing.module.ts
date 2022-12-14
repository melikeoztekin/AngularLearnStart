import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardProductsPageComponent } from './pages/dashboard-products-page/dashboard-products-page.component';
import { ProductFormPageComponent } from './pages/product-form-page/product-form-page.component';

const routes: Routes = [
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
