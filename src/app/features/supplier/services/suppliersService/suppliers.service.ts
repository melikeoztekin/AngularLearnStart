import { Supplier } from '../../../../shared/models/supplier';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SuppliersService {
  controllerUrl = `${environment.apiUrl}/suppliers`;
  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(this.controllerUrl);
  }
}
