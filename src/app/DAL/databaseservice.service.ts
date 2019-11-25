import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseserviceService {
  studentsRef: AngularFireList<any>;
  subjectsRef: AngularFireList<any>;
  quizzRef: AngularFireList<any>;
  allStudent;
  allSubject;
  allQuizzs

  constructor(db: AngularFireDatabase) {
    this.studentsRef = db.list('Students');
    this.studentsRef.valueChanges().subscribe(a=>{
      this.allStudent=a
      console.log(this.allStudent);    
    })
    this.subjectsRef = db.list('Subjects')
    this.subjectsRef.valueChanges().subscribe(b=>{
      this.allSubject=b
      console.log(this.allSubject);    
    })
    this.quizzRef = db.list('Quizs')
    this.quizzRef.valueChanges().subscribe(c=>{
      this.allQuizzs=c
      console.log(this.allQuizzs);    
    })
   }
}
