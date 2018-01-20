import {Directive, forwardRef, Attribute} from '@angular/core';
import {NG_VALIDATORS, Validators, AbstractControl, ValidatorFn} from '@angular/forms';
@Directive({
  selector: '[validateEqual][formControlName],[validateEqual][formControl], [validateEqual][ngModel]',
  providers: [
    {provide:NG_VALIDATORS, useExisting:  forwardRef(()=> ValidateDirective), multi: true}
  ]
  
})
export class ValidateDirective implements Validators {

  constructor( @Attribute('validateEqual') public validateEqual: string) { }
  
  validate (c: AbstractControl):{ [key:string ]: any}{
    let v = c.value;

    let e = c.root.get(this.validateEqual);

    if (e && v !== e.value)
    {
      return { validateEqual: false}
    }
    return null;
  }

}
