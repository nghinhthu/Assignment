import { Component, OnInit } from "@angular/core";
import { StudentsService } from "../DAL/students.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { DatabaseserviceService } from "../DAL/databaseservice.service";
import { map } from "rxjs/operators";


@Component({
  selector: "app-dangky",
  templateUrl: "./dangky.component.html",
  styleUrls: ["./dangky.component.css"]
})
export class DangkyComponent implements OnInit {
  dangki;
  student = [];
  students: any;
  password = "";
  user = {
    username: "",
    password: "",
    fullname: "",
    email: "",
    gender: "",
    birthday: "",
  };
  temp: Boolean = false;
  studentsRef: AngularFireList<any>;
  items: Observable<any[]>;
  allStudents;
  constructor(
    private studentsService: StudentsService,
    private route: ActivatedRoute,
    db: AngularFireDatabase,
    private databaseService: DatabaseserviceService,
  ) {}

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
  checkName() {
    if (this.user.fullname == "") {
      window.alert("Vui lòng điền tên sinh viên!");
    } else {
      this.temp = true;
    }
    return this.temp;
  }
  checkUserName() {
    if (this.temp == true) {
      if (this.user.username == "") {
        window.alert("Vui lòng điền tên đăng nhập!");
      }
      for (let i = 0; i <= this.allStudents.length; i++) {
        if (this.user.username == this.allStudents[i].username) {
          window.alert("Tên đăng nhập đã tồn tại!");
        } else {
          this.temp = true;
        }
        return this.temp;
      }
    }
  }

  checkPass() {
    if (this.temp == true) {
      if (this.password != this.user.password) {
        window.alert("Mật khẩu không trùng khớp!");
      } else {
        window.alert(
          "Tài khoản " + this.user.username + " đã được đăng ký thành công!"
        );
        this.studentsService.add(this.user);
      }
      
      // localStorage.setItem("user", JSON.stringify(this.student));
    }
  }
  submit() {
    this.checkName();
    this.checkUserName();
    if (this.temp == true) {
      this.checkPass();
    }
  }
}
