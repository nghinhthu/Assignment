import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  studentsRef: AngularFireList<any>;
  allStudents;

  constructor(private db: AngularFireDatabase) {
    
    this.studentsRef = db.list('Students');
    this.studentsRef.valueChanges().subscribe(data => {
      this.allStudents= data;    
    });
   }
  // getAllStudents(){
  //   return this.http.get('./assets/db/Students.js');
  // }
  add(item) {
    this.studentsRef.push(item);  
  }
  update(key,item){
    this.studentsRef.update(key,{'password':item.password,'gender':item.gender,'fullname':item.fullname,'birthday':item.birthday});
    alert('Thay đổi thông tin thành công')
  }
}
