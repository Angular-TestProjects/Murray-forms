import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-validation-approaches',
  templateUrl: './validation-approaches.component.html',
  styleUrls: ['./validation-approaches.component.scss']
})
export class ValidationApproachesComponent {

  @ViewChild('skuToast', { static: true }) skuToast!: ElementRef;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      sku: ["", Validators.compose([Validators.required, ValidationApproachesComponent.skuValidator])]
    });
  }

  onSubmit(value: string) {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      $.toast({
        class: 'error',
        message: `Please submit any SKU value.`
      });
      return;
    }

    $(this.skuToast.nativeElement).toast();

    console.log('you submitted value:', value);
  }

  static skuValidator(control: FormControl): { [s: string]: boolean } | null {
    if (control.value.match(/^123/)) {
      return null;
    }

    return {invalidSku: true};
  }

  resetForm() {
    this.form.controls['sku'].patchValue("EMPTY");
  }
}
