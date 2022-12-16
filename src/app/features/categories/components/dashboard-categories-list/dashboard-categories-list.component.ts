import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/features/categories/models/category';
import { CategoriesService } from 'src/app/features/categories/services/categoriesService/categories.service';

@Component({
  selector: 'app-dashboard-categories-list',
  templateUrl: './dashboard-categories-list.component.html',
  styleUrls: ['./dashboard-categories-list.component.css'],
})
export class DashboardCategoriesListComponent implements OnInit {
  title: string = 'Categories List Dashboard';
  categories!: Category[];
  searchCategoryNameInput: string | null = null;
  isLoading: boolean = false;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategoriesList();
  }

  getCategoriesList(): void {
    this.categoriesService.getList().subscribe((response) => {
      setTimeout(() => {
        this.categories = response;
        this.isLoading = true;
      }, 1500);
    });
  }

  get filteredCategories(): any[] {
    this.isLoading = true;
    let filteredCategories = this.categories;
    if (this.searchCategoryNameInput) {
      filteredCategories = filteredCategories.filter((c) =>
        c.name
          .toLowerCase()
          .includes(this.searchCategoryNameInput!.toLowerCase())
      );
    }
    return filteredCategories;
  }

  onSearchCategoryNameChange(event: any): void {
    this.searchCategoryNameInput = event.target.value;
  }
}
