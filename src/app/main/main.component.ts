import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { StateService } from '../State/state.service';
import { CityService } from '../City/city.service';
import { IState } from '../State/state.interface';
import { ICity } from '../City/city.interface';

import * as _ from 'lodash';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  myForm: FormGroup;
  allStates: IState[];
  cityByState: ICity[];

  constructor(public fb: FormBuilder,
    private _StateService: StateService,
    private _CityService: CityService
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      state: '',
      city: ''
    });

    this._StateService.getState()
      .subscribe(
      stateData => this.allStates = _.uniqBy(stateData, 'state')
      );
  }

  onSelect(stateName) {
    console.log ('User selected ' + stateName);
    this._CityService.getCity(stateName)
      .subscribe(
      cityData => this.cityByState = _.filter(cityData, function(o) { return o.state == stateName})
      );

  }

}
