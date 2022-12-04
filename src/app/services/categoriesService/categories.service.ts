import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';

//# Injectable, bir class'ın IoC'e katılması ve injectable olmasını sağlar. Dependency Injection mekanizmasını kullanarak servisin referansını alabiliriz.
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  controllerUrl: string = `${environment.apiUrl}/categories`; //* Magic String
  constructor(private httpClient: HttpClient) {}

  //# Generic, bir class'ın/metodun içerisnde kullanılacak tipi/tipleri belirlemek için kullanılır.
  getList(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.controllerUrl);
  }

  getById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.controllerUrl}/${id}`);
  }

  add(request: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.controllerUrl, request);
  }

  update(request: Category): Observable<Category> {
    return this.httpClient.put<Category>(
      `${this.controllerUrl}/${request.id}`,
      request
    );
  }

  delete(categoryId: number): Observable<Category> {
    return this.httpClient.delete<Category>(
      `${this.controllerUrl}/${categoryId}`
    );
  }
}
