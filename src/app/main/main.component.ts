import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  teacherForm: FormGroup; 

  constructor(
    public fb: FormBuilder,
    public teacher: TeacherService,
    private router: Router,
    private ngZone: NgZone 
  ) { }

  ngOnInit(){
    this.teacherForm = this.fb.group({
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
  }

  submitForm(){
    console.log(this.teacherForm);
    this.teacher.createTeacher(this.teacherForm.value).subscribe((res) => {
      console.log('Teacher Added!');
      this.ngZone.run(() => this.router.navigateByUrl('/teacher-list'));
    })
  }

}
