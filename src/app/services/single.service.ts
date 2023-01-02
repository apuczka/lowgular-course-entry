import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SingleModel } from '../model/single.model';

@Injectable({ providedIn: 'root' })
export class SingleService {
   

   getAll(): Observable<SingleModel[]> {
    return this._httpClient.get<SingleModel[]>('https://api2.binance.com/api/v3/ticker/24hr');
   }
}
