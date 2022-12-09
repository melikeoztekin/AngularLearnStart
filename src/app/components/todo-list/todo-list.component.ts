import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  addToDo: string = '';
  toDoList: string[] = [
    'Angular çalış',
    'Ödevleri yap',
    'Gece 1e kadar frontend geliştir.',
  ];

  addToDoList() {
    this.toDoList.push(this.addToDo);
    this.addToDo = '';
  }

  removeToDo(todo: string) {
    this.toDoList = this.toDoList.filter((t) => t != todo);
  }
}
