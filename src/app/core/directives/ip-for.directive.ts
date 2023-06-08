import {
  Directive,
  DoCheck,
  Input,
  IterableDiffer,
  IterableDiffers,
  TemplateRef,
  ViewContainerRef,
  ViewRef
} from '@angular/core';

@Directive({
  selector: '[ipFor]'
})
export class IpForDirective implements DoCheck{

  private items: any;
  private differ: IterableDiffer<any> | undefined;
  private views: Map<any, ViewRef> = new Map<any, ViewRef>();

  constructor(private viewContainer: ViewContainerRef,
              private template: TemplateRef<any>,
              private differs: IterableDiffers) {
    console.log("View container", viewContainer);
    console.log("Template", template);
  }

  @Input()
  set ipForOf(items: any) {
    this.items = items;
    if (this.items && !this.differ) {
      this.differ = this.differs.find(items).create();
    }
  }

  @Input()
  set ipForTo(items: any) {
    console.log("ipForTo", items);
  }

  ngDoCheck(): void {
    if(!this.differ) return;

    const changes = this.differ.diff(this.items);
    if (changes) {
      changes.forEachAddedItem(change => {
        const view = this.viewContainer.createEmbeddedView(
          this.template, { $implicit: change.item });

        this.views.set(change.item, view);
      });
      changes.forEachRemovedItem(change => {
        const view = this.views.get(change.item);
        if(!view) return;

        const idx = this.viewContainer.indexOf(view);

        this.viewContainer.remove(idx);
        this.views.delete(change.item);
      });
    }
  }
}
