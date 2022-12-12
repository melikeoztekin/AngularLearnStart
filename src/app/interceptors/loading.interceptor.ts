import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    //# Requesti ve response2u manipüle etme
    //# Eğer uygulamada o an bir request gönderilmiş ve cevap bekleniyorsa, uygulama loadinng ekranı gösterilsin
    console.log('Loading started');
    //# cevap  geldiğinde => loading stoped
    //# rxjs
    // TODO Add loading event
    return next.handle(request).pipe(
      finalize(() => {
        //# requestin response döndüğü ve sonlandığını ele alan fonksiyon

        console.log('request bittiğiinde çalışacak fonksiyon');
      })
    );
  }
}
