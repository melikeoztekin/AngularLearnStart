import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { CartItem } from 'src/app/features/cart/models/cart-item';
import { CartService } from 'src/app/features/cart/services/cartService/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = this.authService.isAuthenticated;
  cartItems: CartItem[] = [];

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addLoginIfNotAuthenticated();
    this.getCartItems();
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

  getCartItems() {
    this.cartService.cartItemModel$.subscribe((response) => {
      this.cartItems = response;
    });
  }

  get cartLength(): number {
    let length = this.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0);
    return length;
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  navItems: any[] = [
    {
      label: 'Home',
      routerLink: '/',
      isRouterActiveExact: true,
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
    // {
    //   label: 'Cart',
    //   routerLink: '/cart-summary',
    //   isRouterActiveExact: false,
    // },
  ];
}
