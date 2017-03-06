import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/catch';
import { IState } from './state.interface'

@Injectable()
export class StateService {
  private _urlState = '../../api/state.json';
  sorted:IState[];

  constructor(private _http: Http) { }

  getState(): Observable <IState[]> {
    return this._http.get(this._urlState)
    .map((response: Response) => <IState[]> response.json())
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error('I found something bad');
    console.error( error);
    return Observable.throw(error.json().error || 'Server error ...');
  }

}