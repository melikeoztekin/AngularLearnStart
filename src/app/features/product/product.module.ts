import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DashboardProductsListComponent } from './components/dashboard-products-list/dashboard-products-list.component';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { DashboardProductsPageComponent } from './pages/dashboard-products-page/dashboard-products-page.component';
import { ProductFormPageComponent } from './pages/product-form-page/product-form-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardProductsListComponent,
    ProductFiltersComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductCardComponent,
    DashboardProductsPageComponent,
    ProductFormPageComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DashboardProductsListComponent,
    ProductFiltersComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductCardComponent,
    DashboardProductsPageComponent,
    ProductFormPageComponent,
  ],
})
export class ProductModule {}
