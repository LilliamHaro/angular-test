import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { Home } from "./Home/Home.component";
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FormComponent } from './form/form.component';

const rutas: Routes = [
  { path: "", component: Home },
  { path: "home", component: Home },
  { path: "proyectos", component: ProyectosComponent },
  { path: "form", component: FormComponent },
];

@NgModule({
  declarations: [AppComponent, Home, ProyectosComponent, FormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
