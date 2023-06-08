import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ipIf]'
})
export class IpIfDirective {
  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>) {
    console.log("View container", viewContainer);
    console.log("Template container", template);
  }

  @Input() set ipIf(condition: any) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    } else {
      this.viewContainer.clear();
    }
  }

}
