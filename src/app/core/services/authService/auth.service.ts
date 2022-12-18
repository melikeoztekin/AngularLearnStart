import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginRequestModel } from '../../models/login-request-model';
import { LoginResponseModel } from '../../models/login-response-model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from '../localStorageService/localStorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  controllerUrl: string = `${environment.apiUrl}/auth`;

  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
    private localStorageService: LocalStorageService
  ) {}

  login(request: LoginRequestModel): Observable<LoginResponseModel> {
    return this.httpClient.post<LoginResponseModel>(
      this.controllerUrl + '/login',
      request
    );
  }

  logout() {
    this.localStorageService.remove('token');
  }

  get isAuthenticated(): boolean {
    let token = this.localStorageService.get('token');
    if (!token) return false;
    if (this.jwtHelperService.isTokenExpired()) return false;
    return true;
  }
}
