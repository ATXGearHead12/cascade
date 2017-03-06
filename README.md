# Cascade

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Testing Cascade Dropdowns

Using Angular2 Material Design,  ReactiveForms create a drop down of states that will cause a list of citys to filter.  I found this example
http://www.talkingdotnet.com/cascading-dropdown-select-list-using-angular-js-2/
but it is not using reactiveForms.    

When the screen loads there are no errors in the console.   The dropdown for states has a list of states.   When selecting a state this occurs...
Error in ./MainComponent class MainComponent - inline template:11:16 caused by: Cannot read property 'value' of undefined 

## Conclusion 

You need to take a look at material source code https://github.com/angular/material2/blob/master/src/lib/select/select.ts#L247

@Output() change: EventEmitter<MdSelectChange> = new EventEmitter<MdSelectChange>();
as you can see there is emitted event with MdSelectChange payload

export class MdSelectChange {
  constructor(public source: MdSelect, public value: any) { }
}

On the main.componet.html replace

(change)="onSelect($event.target.value)"
with

(change)="onSelect($event.value)"