import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainPageComponent } from './main-page/main-page.component';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {SidebarItemComponent} from "./sidebar/sidebar-item.component";
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveWithBuilderComponent } from './reactive-with-builder/reactive-with-builder.component';
import { ValidationApproachesComponent } from './validation-approaches/validation-approaches.component';
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SidebarComponent,
    SidebarItemComponent,
    TemplateDrivenComponent,
    ReactiveWithBuilderComponent,
    ValidationApproachesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
