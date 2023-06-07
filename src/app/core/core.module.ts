import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopupDirective} from "./directives/popup.directive";

@NgModule({
  declarations: [
    PopupDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopupDirective
  ]
})
export class CoreModule { }
