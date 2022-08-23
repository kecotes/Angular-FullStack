import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddTeacherComponent } from './teachers/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './teachers/edit-teacher/edit-teacher.component';
import { ListTeacherComponent } from './teachers/list-teacher/list-teacher.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main'},
  { path: 'main', component: MainComponent },
  { path: 'characters', component: ListTeacherComponent },
  { path: 'add-teacher', component: AddTeacherComponent },
  { path: 'edit-teacher/:id', component: EditTeacherComponent }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
