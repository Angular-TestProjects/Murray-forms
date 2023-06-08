import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[popup]',
  exportAs: 'popup'
})
export class PopupDirective {

  constructor(_elementRef: ElementRef) {
    console.log('Directive bound', _elementRef);
  }

  @HostListener('click') displayMessage(): void {
    alert("Host was clicked!!!");
  }

}
