import {Component, OnInit, Inject} from '@angular/core';
import {AppSection} from "../app-section.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(@Inject('AppSections') public items: AppSection[]) { }

  ngOnInit() {
  }

}
