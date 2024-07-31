import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { CreateComponent } from './components/create/create.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ExecptionsComponent } from './components/execptions/execptions.component';
import { SearchComponent } from './components/search/search.component';
import { TemplateComponent } from './components/template/template.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    CreateComponent,
    EmployeeComponent,
    EmployeesComponent,
    ExecptionsComponent,
    SearchComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
