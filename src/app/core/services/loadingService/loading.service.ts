import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  // isLoading: boolean = false;
  // isLoadingSubject: Subject<boolean> = new Subject<boolean>();
  isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  textSubject: Subject<string> = new Subject<string>();

  //# subject konusu
  //# Subject, BehaviorSubject => BehaviorSubject başlangıç değeri ister!
  constructor() {}

  startLoading(textSubjectMessage: string = 'loading') {
    this.isLoadingSubject.next(true);
    // next
    this.textSubject.next(textSubjectMessage);
  }

  stopLoading() {
    setTimeout(() => {
      this.isLoadingSubject.next(false);
    }, 1000);
  }
}

// TODO loading serviceden text isminde bir veri taşınmalıdır. string
// TODO Bu text input ile app.component'den overlay-loading'e taşınmalıdır
// TODO bu text ise overlay-loading'de gösterilmelidir.
