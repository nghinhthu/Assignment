import { Component, OnInit } from "@angular/core";
import { Student } from "../student";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { StudentsService } from "../DAL/students.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
// import {ListQuestionService} from '../server/list-question.service';

@Component({
  selector: "app-dangnhap",
  templateUrl: "./dangnhap.component.html",
  styleUrls: ["./dangnhap.component.css"]
})
export class DangnhapComponent implements OnInit {
  student = [];
  students: any;
  temp: boolean = false;
  user = {
    username: "",
    password: "",
    fullname: ""
  };
  items: Observable<any[]>;

  constructor(
    private studentsService: StudentsService,
    private route: Router,
    private http: HttpClient,
    db: AngularFirestore
  ) {
    // this.items = db.collection('items').valueChanges();
  }

  ngOnInit() {
    this.studentsService.getAllStudents().subscribe(data => {
      this.students = data;
    });
    this.student = JSON.parse(localStorage.getItem("user"));
  }
  submit() {
    let t: boolean = false;
    this.student.forEach(p => {
      if (this.user.username == p.username) {
        if (this.user.password == p.password) {
          this.user.username = p.username;
          this.user.password = p.password;
          this.user.fullname = p.fullname;

          window.alert(this.user.fullname + " đã đăng nhập thành công");
          this.route.navigateByUrl("/monhoc");
          localStorage.setItem("login", JSON.stringify(this.user));
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
