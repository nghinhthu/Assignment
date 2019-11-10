import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StudentsService } from "../DAL/students.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { element } from "protractor";
import { checkServerIdentity } from "tls";
import { ActivatedRoute } from "@angular/router";

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
  items: Observable<any[]>;
  constructor(
    private studentsService: StudentsService,
    private route: ActivatedRoute,
    private http: HttpClient,
    db: AngularFirestore
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dangki = +params.get("Dangky");
    });
    this.student = JSON.parse(localStorage.getItem("user"));
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
      for (let i = 0; i <= this.student.length; i++) {
        if (this.user.username == this.student[i].username) {
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
      }
      this.student.push(this.user);
      localStorage.setItem("user", JSON.stringify(this.student));
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
