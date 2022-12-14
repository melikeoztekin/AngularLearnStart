import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { CategoryRoutingModule } from './category-routing.module';
import { DashboardCategoriesListComponent } from './components/dashboard-categories-list/dashboard-categories-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { CategoryFormPageComponent } from './pages/category-form-page/category-form-page.component';
import { DashboardCategoriesPageComponent } from './pages/dashboard-categories-page/dashboard-categories-page.component';

@NgModule({
  declarations: [
    DashboardCategoriesListComponent,
    CategoryListComponent,
    CategoryFormComponent,
    CategoryTableComponent,
    CategoryFormPageComponent,
    DashboardCategoriesPageComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DashboardCategoriesListComponent,
    CategoryListComponent,
    CategoryFormComponent,
    CategoryTableComponent,
    CategoryFormPageComponent,
    DashboardCategoriesPageComponent,
  ],
})
export class CategoryModule {}
