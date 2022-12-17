import { Router } from '@angular/router';
import { LocalStorageService } from './../../../core/services/localStorageService/localStorage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/authService/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin() {
    //# girilen bilgiler ile backend isteği atılacak
    if (!this.loginForm.valid) {
      // TODO : add toastr warning
      return;
    }
    //# http isteği
    this.authService.login(this.loginForm.value).subscribe((response) => {
      console.log(response);
      //# Gelen access token i kaydet
      this.localStorageService.add('token', response.access_token);
      //# Giriş yapıldığında default olarak nereye yönlendirmek istiyorsak oraya yönlendirelim
      this.router.navigateByUrl('/dashboard/products');
    });
  }
}
