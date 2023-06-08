import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[popup]',
  exportAs: 'popup'
})
export class PopupDirective {

  constructor() { }

  @HostListener('click') displayMessage(): void {
    alert("Host was clicked!!!");
  }

}
