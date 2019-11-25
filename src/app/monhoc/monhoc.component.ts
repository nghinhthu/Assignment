import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SubjectsService } from "../DAL/subjects.service";
import { Router } from "@angular/router";
import { DatabaseserviceService } from "../DAL/databaseservice.service";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-monhoc",
  templateUrl: "./monhoc.component.html",
  styleUrls: ["./monhoc.component.css"]
})
export class MonhocComponent implements OnInit {
  itemperpage = 6;
  currentpage = 1;
  page: number;

  listSubjects: any;
  items: Observable<any[]>;
  allSubjects;

  constructor(
    private databaseService: DatabaseserviceService,
    private route: Router,
    db: AngularFirestore
  ) {}

  ngOnInit() {
    this.databaseService.subjectsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    )
    .subscribe(a => (this.allSubjects = a));
  setTimeout(() => {
    console.log(this.allSubjects);
  }, 2000);
  }

  totalPage() {
    this.page = Math.ceil(this.allSubjects.length / this.itemperpage);
  }

  nextPage() {
    if (this.currentpage * this.itemperpage < this.allSubjects.length) {
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
