import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from './../../services/categories.service';
import { Category } from './../../models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  title: string = 'Category List';
  //# ! Şuan undefined olduğu için kızma, daha sonra seni atayacağım şeklinde söz vermiş oluyoru<
  //# ? Bu özellik undefine olabilir demek
  //# null için ? kullanamıyoruz, | null diye belirtmemiz gerekiyor.
  categories!: Category[];

  //# Encapsulation
  private _categoriesListItems: any[] = [{ label: 'All', value: null }];

  //# Getter
  get categoriesListItems(): any[] {
    //# property
    return [
      ...this._categoriesListItems,
      ...this.categories.map((c) => {
        return { label: c.name, value: c.id };
      }),
    ];
  }
  //# Setter
  set categoriesListItems(value: any[]) {
    if (value.length > 0) this._categoriesListItems = value;
  }
  // console.log(this.categoriesListItems); //# Get
  // this.categoriesListItems=[]; //# Set

  //# private, public, protected
  //# private: sadece class içerisinde kullanılabilir
  //# public : her yerden kullanılabilir
  //# default olarak publictir
  //# protected: sadece class içerisinde ve class'ın inherit edildiği yerlerde kullanılabilir.
  public selectedCategoryId: number | null = null;

  //#1 private activatedRoute: ActivatedRoute;
  //# IoC(Inversion of control), referansların tutulduğu bir container'dır
  //# Dependency Injection, IoC container'ın içerisindeki referanları kullanmamızı sağlayan bir mekanizmadır.
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {
    //# constructor class oluşturulduğu an çalışır
    //#2 this.activatedRoute = activatedRoute;
    //# 1 ve 2 numaralı yerler yerine bir erişim belirteci kullanmamız yeterlii olacaktır.
  }

  ngOnInit(): void {
    //# ngOnInit() methodu component'in oluşturulduğu an çalışır
    //# component ilk çalıştığında gelen bilgiler
    this.getSelectedCategoryIdFromRoute();
    this.getListCategories();
  }

  getListCategories() {
    this.categoriesService.getList().subscribe((response) => {
      this.categories = response;
    });
  }

  getSelectedCategoryIdFromRoute() {
    //# Observer design pattern
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);

      if (params['categoryId'] !== undefined) {
        this.selectedCategoryId = Number(params['categoryId']);
      }
    }); //# callback
  }

  // onSelectedCategory(categoryId: number | null): void {
  // if (category === null) this.selectedCategoryId = null;
  // else this.selectedCategoryId = category.id;
  //# yerine

  //# Debugging
  // debugger; // breakpoint. Uygulama çalışma anında bu satıra gelince duracak ve adım adım takip edebileceğimiz bir panel açılacak

  //# ternary operator kullanabiliriz
  // this.selectedCategoryId = category === null ? null : category.id;

  //# optional chaining operator
  //# object?.id dediğimiz zaman, object null değilse ve id'e ulaşabiliyorsa idsini alır, null ise null döner

  //# nullish coalescing operator
  //# ?? operatörü ile sol taraf false (null, undefined, 0, "") ise sağ tarafı atar
  // this.selectedCategoryId = categoryId ?? null;
  // }

  isSelectedCategory(categoryId: number | null): boolean {
    return categoryId === this.selectedCategoryId;
  }
}
