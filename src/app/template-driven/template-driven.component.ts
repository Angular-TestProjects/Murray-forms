import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {

  @ViewChild('skuToast', { static: true }) skuToast!: ElementRef;

  onSubmit(form: any): void {
    $(this.skuToast.nativeElement).toast();

    console.log('you submitted value:', form);
  }

}
