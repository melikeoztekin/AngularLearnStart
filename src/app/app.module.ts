import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryListComponent } from './features/components/category-list/category-list.component';
import { ProductListComponent } from './features/components/product-list/product-list.component';
import { HomePageComponent } from './features/pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ProductFormComponent } from './features/components/product-form/product-form.component';
import { ProductFormPageComponent } from './pages/product-form-page/product-form-page.component';
import { DashboardProductsPageComponent } from './pages/dashboard-products-page/dashboard-products-page.component';
import { DashboardCategoriesPageComponent } from './pages/dashboard-categories-page/dashboard-categories-page.component';
import { DashboardCategoriesListComponent } from './features/components/dashboard-categories-list/dashboard-categories-list.component';
import { CategoryFormPageComponent } from './pages/category-form-page/category-form-page.component';
import { CategoryFormComponent } from './features/components/category-form/category-form.component';
import { ProductCardComponent } from './features/components/product-card/product-card.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { FilterProductByPricePipe } from './pipes/filter-product-by-price.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ButtonColorDirective } from './directives/button-color.directive';
import { ProductFiltersComponent } from './features/components/product-filters/product-filters.component';
import { TodoListComponent } from './features/components/todo-list/todo-list.component';
import { TodoItemComponent } from './features/components/todo-item/todo-item.component';
import { CategoryTableComponent } from './features/components/category-table/category-table.component';
import { DateInterceptor } from './core/interceptors/date.interceptor';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { AuthorizationInterceptor } from './core/interceptors/authorization.interceptor';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    LoadingSpinnerComponent,
    ProductFormPageComponent,
    DashboardProductsPageComponent,
    DashboardCategoriesPageComponent,
    CategoryFormPageComponent,
    FilterProductPipe,
    FilterProductByPricePipe,
    HighlightDirective,
    ButtonColorDirective,
    OverlayLoadingComponent,
  ], // HTML tarafındaki angular bileşenlerini tanımlar
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
    FeaturesModule,
  ], // Angular modülleri import edeceğimiz yer
  exports: [], // diğer moduller tarafından kullanılacak bileşenleri yazıyoruz
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
