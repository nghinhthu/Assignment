import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { DatabaseserviceService } from "../DAL/databaseservice.service";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-suataikhoan',
  templateUrl: './suataikhoan.component.html',
  styleUrls: ['./suataikhoan.component.css']
})
export class SuataikhoanComponent implements OnInit {

  student = JSON.parse(localStorage.getItem('user'));
  user = JSON.parse(localStorage.getItem('login'))
  items: Observable<any[]>;
  allStudents;

  constructor(
    private databaseService: DatabaseserviceService,
    private route: Router,
    db: AngularFirestore
  ) { }

  ngOnInit() {
    this.databaseService.studentsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    )
    .subscribe(a => (this.allStudents = a));
  setTimeout(() => {
    console.log(this.allStudents);
  }, 2000);
  }
  submit(){
    localStorage.setItem('login',JSON.stringify(this.user))
    for(var i = 0; i < this.allStudents.length; i++) {
      if(this.allStudents[i].username === this.user.userName) {
        this.allStudents[i] = this.user;
      }
    }
    // localStorage.setItem('user',JSON.stringify(this.student))
  }
}
