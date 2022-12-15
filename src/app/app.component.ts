import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loadingService/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private loadingService: LoadingService) {}

  isLoading: boolean = false;
  textMessage: string = '';
  //# loading.service'den çekip, değerini değiştirmek istiyorum
  ngOnInit(): void {
    this.subscribeToLoading();
    this.subscribeToTextMessage();
  }

  subscribeToLoading() {
    this.loadingService.isLoadingSubject.subscribe((isLoading) => {
      console.log(isLoading);
      this.isLoading = isLoading;
    });
  }

  subscribeToTextMessage() {
    this.loadingService.textSubject.subscribe((response) => {
      this.textMessage = response;
    });
  }
}
