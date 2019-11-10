import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { StudentsService } from "../DAL/students.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-doimatkhau',
  templateUrl: './doimatkhau.component.html',
  styleUrls: ['./doimatkhau.component.css']
})
export class DoimatkhauComponent implements OnInit {

  student = [];
  students: any;
  temp: boolean = false;
  t;
  user = {
    username: "",
    password: "",
    fullname: "",
  };
  newPassword;
  repeatPassword;
  constructor(
    private studentsService: StudentsService,
    private route: ActivatedRoute,
    private http: HttpClient,
    db: AngularFirestore
  ) { }

  ngOnInit() {
  }
  
}
