import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-with-builder',
  templateUrl: './reactive-with-builder.component.html',
  styleUrls: ['./reactive-with-builder.component.scss']
})
export class ReactiveWithBuilderComponent implements OnInit{

  @ViewChild('skuToast', { static: true }) skuToast!: ElementRef;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      sku: []
    })
  }

  ngOnInit(): void {

  }

  onSubmit(value: string) {
    $(this.skuToast.nativeElement).toast();

    console.log('you submitted value:', value);
  }
}
