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

    element = []
    show=false;
    
    itemperpage = 1;
    currentpage = 1;
    page:number;
    
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
  listSubjects;
  subject;
  quizzs: any;
  question;
  Id;
  answer;
  
  dapan = [];
  point = 0;
  answerId: number = -1;

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
          console.log(this.question)
      })
    })
  }
  socau(){
    let socau=this.question.length;
    return socau;
  }
  tinhDiem()
  {
    
    for(let i = 0; i < this.question.length; i++)
    {
      if(this.dapan[i]==this.question[i].AnswerId)
      {
        this.point += this.question[i].Mark
      }
      return this.point
    }
    
  }
  submit()
  {
    this.tinhDiem()
    this.show=true
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
