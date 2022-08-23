import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { ListTeacherComponent } from './list-teacher/list-teacher.component';



@NgModule({
  declarations: [
    AddTeacherComponent,
    EditTeacherComponent,
    ListTeacherComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddTeacherComponent,
    EditTeacherComponent,
    ListTeacherComponent
  ]
})
export class TeachersModule { }
