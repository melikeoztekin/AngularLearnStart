import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';

import { DashboardCategoriesListComponent } from './components/dashboard-categories-list/dashboard-categories-list.component';
import { DashboardCategoriesPageComponent } from './pages/dashboard-categories-page/dashboard-categories-page.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { CategoryFormPageComponent } from './pages/category-form-page/category-form-page.component';

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryFormComponent,
    CategoryTableComponent,
    CategoryFormPageComponent,
    DashboardCategoriesListComponent,
    DashboardCategoriesPageComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    CategoryListComponent,
    CategoryFormComponent,
    CategoryTableComponent,
    CategoryFormPageComponent,
    DashboardCategoriesListComponent,
    DashboardCategoriesPageComponent,
  ],
})
export class CategoryModule {}
