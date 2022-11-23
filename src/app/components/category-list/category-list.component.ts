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

  selectedCategoryId: number | null = 0;

  onSelectedCategory(category: any | null) {
    // if (category === null) this.selectedCategoryId = null;
    // else this.selectedCategoryId = category.id;
    // yerine

    //# Debugging
    // debugger; // breakpoint. Uygulama çalışma anında bu satıra gelince duracak ve adım adım takip edebileceğimiz bir panel açılacak

    //# ternary operator kullanabiliriz
    // this.selectedCategoryId = category === null ? null : category.id;

    //# nullish coalescing operator
    //# object?.id dediğimiz zaman, object null değilse ve id'e ulaşabiliyorsa idsini alır, null ise null döner
    //# ?? operatörü ile sol taraf false (null, undefined, 0, "") ise sağ tarafı atar
    this.selectedCategoryId = category?.id ?? null;
  }
}
