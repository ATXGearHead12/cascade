import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// third party
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout/flexbox";

// my services & componets
import { CityService } from './City/city.service';
import { StateService } from './State/state.service';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule,
  ],
  providers: [StateService, CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
