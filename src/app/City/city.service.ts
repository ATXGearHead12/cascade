import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/catch';
import { ICity } from './city.interface'

@Injectable()
export class CityService {
  private _urlCity = '../../api/city.json';

  constructor(private _http: Http) { }

  getCity(stateName:string): Observable<ICity[]> {
    return this._http.get(this._urlCity)
      .map((response: Response) => <ICity[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error('I found something bad');
    console.error(error);
    return Observable.throw(error.json().error || 'Server error ...');
  }


}
