import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { DashboardCategoriesListComponent } from './components/dashboard-categories-list/dashboard-categories-list.component';
import { DashboardProductsListComponent } from './components/dashboard-products-list/dashboard-products-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    CategoryFormComponent,
    CategoryListComponent,
    CategoryTableComponent,
    ProductCardComponent,
    ProductFiltersComponent,
    ProductListComponent,
    ProductFormComponent,
    TodoItemComponent,
    TodoListComponent,
    DashboardCategoriesListComponent,
    DashboardProductsListComponent,
    HomePageComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
