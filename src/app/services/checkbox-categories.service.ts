import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckboxCategoriesModel } from '../model/checkbox-categories.model';

@Injectable({ providedIn: 'root' })
export class CheckboxCategoriesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CheckboxCategoriesModel[]> {
    return this._httpClient.get<CheckboxCategoriesModel[]>('https://fakestoreapi.com/products/categories');
  }
}
