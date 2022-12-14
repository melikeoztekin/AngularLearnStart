import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

//# custom module
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './features/product/product.module';
import { CategoryModule } from './features/category/category.module';
import { SupplierModule } from './features/supplier/supplier.module';
import { TodoModule } from './features/todo/todo.module';

//# components
import { AppComponent } from './app.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { LoginPageComponent } from './shared/pages/login-page/login-page.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, HomePageComponent], // HTML tarafındaki angular bileşenlerini tanımlar
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    SharedModule,
    CoreModule,
    ProductModule,
    CategoryModule,
    SupplierModule,
    TodoModule,
  ], // Angular modülleri import edeceğimiz yer
  providers: [], // IoC Container'daki Dependency Injection'ları tanımlar
  bootstrap: [AppComponent], // Hangi bileşenin ilk açıldığında çalışacağını belirtir
})
export class AppModule {}
