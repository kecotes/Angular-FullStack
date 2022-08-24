import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  teacherForm = this.fb.group({
    id: [''],
    name: [''],
    secondName: [''],   
    status: [''],
    profession: [''],
    typeContract: [''],
    telephone: [''],
    email: [''],
    password: [''],   
  });

  constructor(
    public fb: FormBuilder,
    public teacher: TeacherService,
    private router: Router,
    private ngZone: NgZone 
  ) { }

  ngOnInit(){
    
  }

  submitForm(){
    this.teacher.createTeacher(this.teacherForm.value).subscribe((res) => {
      console.log('Teacher Added!');
      this.ngZone.run(() => this.router.navigateByUrl('/teacher-list'));
    })
  }

}
