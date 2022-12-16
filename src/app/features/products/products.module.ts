import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CoreModule } from 'src/app/core/core.module';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { DashboardProductsListComponent } from './components/dashboard-products-list/dashboard-products-list.component';
import { DashboardProductsPageComponent } from './pages/dashboard-products-page/dashboard-products-page.component';
import { ProductFormPageComponent } from './pages/product-form-page/product-form-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterProductByPricePipe } from './pipes/filter-product-by-price.pipe';
import { FilterProductPipe } from './pipes/filter-product.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
    ProductFiltersComponent,
    ProductCardComponent,
    ProductFormPageComponent,
    DashboardProductsListComponent,
    DashboardProductsPageComponent,
    FilterProductByPricePipe,
    FilterProductPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    ProductListComponent,
    ProductFormPageComponent,
    FilterProductByPricePipe,
    FilterProductPipe,
    ProductFiltersComponent,
  ],
})
export class ProductsModule {}
