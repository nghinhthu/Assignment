import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectsService } from '../DAL/subjects.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-thi',
  templateUrl: './thi.component.html',
  styleUrls: ['./thi.component.css']
})
export class ThiComponent implements OnInit {
  
    listSubjects;
    subject;
    quizzs: any;
    question;
    Id;
    answer;

    itemperpage = 1;
    currentpage = 1;
    page:number;
    
    // socau=this.list.length;

    nextPage() {
        if (this.currentpage * this.itemperpage < this.listSubjects.length) {
          this.currentpage++;
        }
      }
    
      prevPage() {
        if (this.currentpage > 1) 
        {
          this.currentpage--;
        }
      }

    constructor(private subjectsService: SubjectsService, private route: ActivatedRoute, private http:HttpClient) { }

  ngOnInit() {
    this.subjectsService.getAllSubjects().subscribe(data => {
        this.listSubjects = data
        this.route.paramMap.subscribe(p=>this.Id=p.get('Id'))
        this.listSubjects.find(p=>{
          if(p.Id===this.Id)
          {
            this.subject=p
          }
        })
        this.http.get(`../assets/db/Quizs/${this.Id}.js`).subscribe(data=>{
          this.question=data;
      })
    })
  }
  // checkAnswer()
  // {
  //   for( let i = 0; i <= this.question.Answer.length; i++)
  //   {
  //     if(this.question.AnswerId == this.question.Answer[i].Text)
  //     {
  //       this.answer=this.question.Answer[i].Text
  //     }
  //   }
  //   return this.answer
  // }
}
