import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  title: string = 'Category List';
  categories: any[] = [
    { id: 1, name: 'Beverages' },
    { id: 2, name: 'Condiments' },
    { id: 3, name: 'Confections' },
    { id: 4, name: 'Dairy Products' },
    { id: 5, name: 'Grains/Cereals' },
    { id: 6, name: 'Meat/Poultry' },
    { id: 7, name: 'Produce' },
    { id: 8, name: 'Seafood' },
    { id: 9, name: 'Snacks' },
    { id: 10, name: 'Sweets' },
  ];
}
