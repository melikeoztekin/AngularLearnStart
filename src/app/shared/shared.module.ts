import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AlertComponent } from './components/alert/alert.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HighlightDirective } from './directives/highlight.directive';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonColorDirective } from './directives/button-color.directive';
import { StoreModule } from '@ngrx/store';
import { sharedReducers } from './store/shared.reducers';

@NgModule({
  declarations: [
    AlertComponent,
    NavbarComponent,
    MainLayoutComponent,
    TodoItemComponent,
    TodoListComponent,
    HighlightDirective,
    ButtonColorDirective,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(sharedReducers),
  ],
  exports: [
    AlertComponent,
    NavbarComponent,
    MainLayoutComponent,
    HighlightDirective,
    ButtonColorDirective,
    TodoListComponent,
  ],
})
export class SharedModule {}
