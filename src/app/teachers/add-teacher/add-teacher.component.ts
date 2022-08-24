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
