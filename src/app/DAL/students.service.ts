import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students=[];
  student;
  constructor(private http:HttpClient) { }
  getAllStudents(){
    return this.http.get('./assets/db/Students.js');
  }
  addStudent(item) {
    this.students.push(item);  
  }
  getAllStudent() {
    return this.students
  }
  fixInfo(item){
    for(let i=0;i<this.students.length;i++){
      if(this.students[i].id===item.id){
        this.students[i].password=item.password
        this.students[i].fullname=item.fullname
        this.students[i].gender=item.gender
        this.students[i].birthday=item.birthday
      }
    }
    alert('Thay đổi thông tin thành công.')
  }
}
