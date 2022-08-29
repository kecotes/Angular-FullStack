import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main'},
  { path: 'main', component: MainComponent },
  { path: 'list-teacher', component: ListTeacherComponent },
  { path: 'add-teacher', component: AddTeacherComponent },
  { path: 'edit-teacher/:id', component: EditTeacherComponent }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
