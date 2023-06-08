import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopupDirective} from "./directives/popup.directive";
import { IpIfDirective } from './directives/ip-if.directive';
import { IpForDirective } from './directives/ip-for.directive';

@NgModule({
  declarations: [
    PopupDirective,
    IpIfDirective,
    IpForDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopupDirective,
    IpForDirective,
    IpIfDirective
  ]
})
export class CoreModule { }
