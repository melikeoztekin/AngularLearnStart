import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CategoryListComponent } from './features/categories/components/category-list/category-list.component';
import { ProductListComponent } from './features/products/components/product-list/product-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './shared/pages/login-page/login-page.component';
import { LoadingSpinnerComponent } from './core/components/loading-spinner/loading-spinner.component';
import { ProductFormComponent } from './features/products/components/product-form/product-form.component';
import { ProductFormPageComponent } from './features/products/pages/product-form-page/product-form-page.component';
import { DashboardProductsPageComponent } from './features/products/pages/dashboard-products-page/dashboard-products-page.component';
import { DashboardProductsListComponent } from './features/products/components/dashboard-products-list/dashboard-products-list.component';
import { DashboardCategoriesPageComponent } from './features/categories/pages/dashboard-categories-page/dashboard-categories-page.component';
import { DashboardCategoriesListComponent } from './features/categories/components/dashboard-categories-list/dashboard-categories-list.component';
import { CategoryFormPageComponent } from './features/categories/pages/category-form-page/category-form-page.component';
import { CategoryFormComponent } from './features/categories/components/category-form/category-form.component';
import { ProductCardComponent } from './features/products/components/product-card/product-card.component';
import { FilterProductPipe } from './features/products/pipes/filter-product.pipe';
import { FilterProductByPricePipe } from './features/products/pipes/filter-product-by-price.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { ButtonColorDirective } from './shared/directives/button-color.directive';
import { ProductFiltersComponent } from './features/products/components/product-filters/product-filters.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { TodoItemComponent } from './shared/components/todo-item/todo-item.component';
import { IfNotDirective } from './core/directives/if-not.directive';
import { CategoryTableComponent } from './features/categories/components/category-table/category-table.component';
import { DateInterceptor } from './core/interceptors/date.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { OverlayLoadingComponent } from './core/components/overlay-loading/overlay-loading.component';
import { AuthorizationInterceptor } from './core/interceptors/authorization.interceptor';
import { AlertComponent } from './shared/components/alert/alert.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './features/products/products.module';
import { CategoriesModule } from './features/categories/categories.module';
import { SuppliersModule } from './features/suppliers/suppliers.module';

@NgModule({
  declarations: [AppComponent, HomePageComponent], // HTML tarafındaki angular bileşenlerini tanımlar
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    SharedModule,
    CoreModule,
    ProductsModule,
    CategoriesModule,
    SuppliersModule,
  ], // Angular modülleri import edeceğimiz yer
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DateInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
  ], // IoC Container'daki Dependency Injection'ları tanımlar
  bootstrap: [AppComponent], // Hangi bileşenin ilk açıldığında çalışacağını belirtir
})
export class AppModule {}
