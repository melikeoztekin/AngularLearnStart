import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/authService/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  isAuthenticated: boolean = this.authService.isAuthenticated;

  ngOnInit(): void {
    this.addLoginIfNotAuthenticated();
  }

  addLoginIfNotAuthenticated() {
    if (!this.isAuthenticated) {
      this.navItems.push({
        label: 'Login',
        routerLink: '/login',
        isRouterActiveExact: true,
      });
    } else {
      //# kullanıcı giriş yapmıştır
    }
  }

  navItems: any[] = [
    {
      label: 'Home',
      routerLink: '/',
      isRouterActiveExact: true,
    },
    {
      label: 'Login',
      routerLink: '/login',
      isRouterActiveExact: false,
    },
    {
      label: 'Product Dashboard',
      routerLink: '/dashboard/products',
      isRouterActiveExact: false,
    },
    {
      label: 'Category Dashboard',
      routerLink: '/dashboard/categories',
      isRouterActiveExact: false,
    },
  ];
}
