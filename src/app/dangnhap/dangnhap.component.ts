import { Component, OnInit } from "@angular/core";
import { Student } from "../student";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { StudentsService } from "../DAL/students.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { DatabaseserviceService } from "../DAL/databaseservice.service";
import { map } from "rxjs/operators";
// import {ListQuestionService} from '../server/list-question.service';

@Component({
  selector: "app-dangnhap",
  templateUrl: "./dangnhap.component.html",
  styleUrls: ["./dangnhap.component.css"]
})
export class DangnhapComponent implements OnInit {
  temp: boolean = false;
  user = {
    username: "",
    password: "",
    fullname: ""
  };
  items: Observable<any[]>;
  allStudents;

  constructor(
    private databaseService: DatabaseserviceService,
    private route: Router,
    db: AngularFirestore
  ) {
    // this.items = db.collection('items').valueChanges();
  }

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
  submit() {
    let t: boolean = false;
    this.allStudents.forEach(p => {
      if (this.user.username == p.username) {
        if (this.user.password == p.password) {
          this.user.username = p.username;
          this.user.password = p.password;
          this.user.fullname = p.fullname;

          window.alert(this.user.fullname + " đã đăng nhập thành công");
          this.route.navigateByUrl("/monhoc");
          t = true;
        }
        t == true;
      }
    });
    if (t == false) {
      window.alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  }
}
