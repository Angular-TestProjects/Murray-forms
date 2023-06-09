import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppSection} from "./app-section.model";
import {MainPageComponent} from "./main-page/main-page.component";
import {TemplateDrivenComponent} from "./template-driven/template-driven.component";
import {ReactiveWithBuilderComponent} from "./reactive-with-builder/reactive-with-builder.component";
import {ValidationApproachesComponent} from "./validation-approaches/validation-approaches.component";

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'main'},
  {path: 'main', component: MainPageComponent},
  {path: 'template-driven', component: TemplateDrivenComponent},
  {path: 'reactive-driven', component: ReactiveWithBuilderComponent},
  {path: 'validators', component: ValidationApproachesComponent},
  {path: '**', redirectTo: 'main' }
];

const appSections: AppSection[] = [
  { label: "Intro", name: "Root", path: "", component: MainPageComponent },
  { label: "Template driven form", name: "TemplateDriven", path: "template-driven", component: TemplateDrivenComponent },
  { label: "Reactive driven form", name: "ReactiveDriven", path: "reactive-driven", component: ReactiveWithBuilderComponent },
  { label: "Reactive driven form with validators", name: "ReactiveDrivenWithValidators", path: "validators", component: ValidationApproachesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: "AppSections", useValue: appSections}
  ]
})
export class AppRoutingModule{}
