import { CategoriesService } from 'src/app/features/category/services/categoriesService/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css'],
})
export class ProductFiltersComponent implements OnInit {
  title: string = 'Products filter';
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
