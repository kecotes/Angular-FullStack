import { Component, NgZone, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/shared/teacher';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  teacherForm: FormGroup; 

  constructor( 
  ) { }

  ngOnInit(){
  }

  submitForm(){
  }

}
