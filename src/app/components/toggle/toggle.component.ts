import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class ToggleComponent implements ControlValueAccessor {

  toggleValue = true;

  onChangeCallback = (v: boolean) => {};

  onTouchedCallback = () => {}

  constructor() { }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  writeValue(value: boolean): void {
    if (value !== this.toggleValue) {
      this.toggleValue = value;
    }
  }

  toggle(value: boolean): void {
    if (value !== this.toggleValue) {
      this.toggleValue = value;
      this.onChangeCallback(value);
    }
  }
}
