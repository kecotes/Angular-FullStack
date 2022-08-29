import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Teacher } from '../shared/teacher';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class TeacherService {

  baseurl = 'http://localhost:3000'; 
  
  constructor(
    private http: HttpClient
  ) { }
  
  // Http Headers, para que al usar la api sepa que son en archivos json
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  //POST
  createTeacher(data): Observable<Teacher>{
    return this.http.post<Teacher>(
      this.baseurl + '/teachertracking', 
      JSON.stringify(data), 
      this.httpOptions
        ).pipe
          (retry(1), catchError(this.errorHandl));
  }
  
  // GET ID
  getTeacher(id): Observable<Teacher> {
    return this.http
      .get<Teacher>(this.baseurl + '/teachertracking/' + id)
      .pipe(retry(1), catchError(this.errorHandl));
  }

  // GET
  getTeachers(): Observable<Teacher> {
    return this.http.get<Teacher>(
      this.baseurl + '/teachertracking/'
        ).pipe(retry(1), catchError(this.errorHandl));
  }

  // PUT
  updateTeacher(id, data): Observable<Teacher>{
    return this.http.put<Teacher>(
      this.baseurl + '/teachertracking/' + id, 
      JSON.stringify(data), 
      this.httpOptions
      ).pipe(retry(1), catchError(this.errorHandl));
  }

  // DELETE
  deleteTeacher(id): Observable<Teacher>{
    return this.http.delete<Teacher>(
      this.baseurl + '/teachertracking/' + id,
      this.httpOptions
      ).pipe(retry(1), catchError(this.errorHandl));
  }


  // ERROR HANDLING 
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
