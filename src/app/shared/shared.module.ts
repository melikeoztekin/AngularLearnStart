import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AlertComponent } from './components/alert/alert.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from '../interceptors/loading.interceptor';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [AlertComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
})
export class SharedModule {}
