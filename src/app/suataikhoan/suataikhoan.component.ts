import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suataikhoan',
  templateUrl: './suataikhoan.component.html',
  styleUrls: ['./suataikhoan.component.css']
})
export class SuataikhoanComponent implements OnInit {

  student = JSON.parse(localStorage.getItem('user'));
  user = JSON.parse(localStorage.getItem('login'))

  constructor() { }

  ngOnInit() {
  }
  submit(){
    localStorage.setItem('login',JSON.stringify(this.user))
    for(var i = 0; i < this.student.length; i++) {
      if(this.student[i].username === this.user.userName) {
        this.student[i] = this.user;
      }
    }
    localStorage.setItem('user',JSON.stringify(this.student))
  }
}
