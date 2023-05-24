import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppSection} from "./app-section.model";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'main'},
  {path: 'main', component: MainPageComponent},
  {path: '**', redirectTo: 'main' }
];

const appSections: AppSection[] = [
  { label: "Intro", name: "Root", path: "", component: MainPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: "AppSections", useValue: appSections}
  ]
})
export class AppRoutingModule { }
