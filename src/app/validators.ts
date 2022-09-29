import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function range(min: number, max: number): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value && (control.value < min || control.value > max)) {
        return {
          'range': {
            'min': min,
            'max': max,
            'actual': control.value
          }
  
        }
      }
      return null;
    };
  }
  
  
  export function isNumber(control: AbstractControl): ValidationErrors | null {
    return isNaN(control.value) ? { 'NaN': true } : null
  };