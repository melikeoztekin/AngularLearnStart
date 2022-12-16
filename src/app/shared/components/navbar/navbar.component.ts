import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
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
