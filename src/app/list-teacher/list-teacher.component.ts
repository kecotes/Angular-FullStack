import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {

  teacherList: any = [];

  constructor(
    public teacher : TeacherService
  ) { }

  ngOnInit(): void {
    this.loadTeachers();
    console.log('get this');
  }

  loadTeachers() {
    return this.teacher.getTeachers().subscribe(( data: {}) => {
      this.teacherList = data;
    })
  }

}
