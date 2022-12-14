import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { IfNotDirective } from './directives/if-not.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { DateInterceptor } from './interceptors/date.interceptor';

@NgModule({
  declarations: [IfNotDirective],
  imports: [CommonModule, CoreRoutingModule],
  exports: [IfNotDirective],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: DateInterceptor, multi: true },
  ],
})
export class CoreModule {}
