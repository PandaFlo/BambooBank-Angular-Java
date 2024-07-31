import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { CreateComponent } from './components/create/create.component';
import { SearchComponent } from './components/search/search.component';
import { CardsComponent } from './components/cards/cards.component';




const routes: Routes = [

{path: 'employees', component:EmployeesComponent},
{path: 'employees/:id', component:EmployeeComponent},
{path: 'create', component:CreateComponent},
{path: 'search', component:SearchComponent},
{path: 'card', component:CardsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
