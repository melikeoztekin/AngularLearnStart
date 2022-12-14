import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormPageComponent } from './pages/category-form-page/category-form-page.component';
import { DashboardCategoriesPageComponent } from './pages/dashboard-categories-page/dashboard-categories-page.component';

const routes: Routes = [
  {
    path: 'dashboard', //# Grand parent route
    children: [
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
