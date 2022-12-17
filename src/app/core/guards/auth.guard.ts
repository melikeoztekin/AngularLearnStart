import { AuthService } from './../services/authService/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.router.navigateByUrl('/login');
    //# kullanıcı giriş yapmış mı yapmamış mı kontrol et buna göre true/false döndür
    //# JWT => Json Web Token
    //# IP Configuration
    //# Giriş yap JWT yi sakla, jwt var mı? jwt'nin süresi geçmiş mi kontrol et
    //# eğer var ve süresi geçmemiş ise return true
    //# yok veya süresi geçmiş ise return false

    //# localStroge
    if (!this.authService.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
