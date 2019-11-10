import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../DAL/subjects.service';

@Component({
  selector: 'app-monhoc',
  templateUrl: './monhoc.component.html',
  styleUrls: ['./monhoc.component.css']
})
export class MonhocComponent implements OnInit {

  itemperpage = 6;
  currentpage = 1;
  page:number;

  listSubjects: any;

  constructor( private subjectsService: SubjectsService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.subjectsService.getAllSubjects().subscribe(data => {
      this.listSubjects=data;
      // console.log(this.subjects)
  })
  }
  
  
  totalPage() {
    this.page=Math.ceil(this.listSubjects.length/this.itemperpage)
  }

  nextPage() {
    if (this.currentpage * this.itemperpage < this.listSubjects.length) {
      this.currentpage++;
    }
  }

  prevPage() {
    if (this.currentpage != 0) {
      this.currentpage--;
    }
  }

  firstPage() {
    this.currentpage = 1;
  }

  lastPage() {
    this.currentpage = this.page;
  }

}
