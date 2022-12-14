import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AlertComponent } from './components/alert/alert.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ButtonColorDirective } from './directives/button-color.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { FilterProductByPricePipe } from './pipes/filter-product-by-price.pipe';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
  declarations: [
    NavbarComponent,
    AlertComponent,
    ButtonColorDirective,
    HighlightDirective,
    FilterProductPipe,
    FilterProductByPricePipe,
    LoadingSpinnerComponent,
    OverlayLoadingComponent,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    NavbarComponent,
    AlertComponent,
    ButtonColorDirective,
    HighlightDirective,
    FilterProductPipe,
    FilterProductByPricePipe,
    LoadingSpinnerComponent,
    OverlayLoadingComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class SharedModule {}
