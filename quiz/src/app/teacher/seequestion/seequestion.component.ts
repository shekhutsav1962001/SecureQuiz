import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-seequestion',
  templateUrl: './seequestion.component.html',
  styleUrls: ['./seequestion.component.css']
})
export class SeequestionComponent implements OnInit {
  quizid:any;
  allQuestions:any;

  load:any
  constructor(private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
    this.load = true;
    if(this.teacherService.getQuizId()==undefined)
    {
      this.router.navigate(['/teacher/teacherhome']);
    }
    else
    {
      this.quizid=this.teacherService.getQuizId();
      this.getAllQuestions(this.quizid)
    }
  }

  getAllQuestions(quizid)
  {
    console.log("hahaha");
    console.log(quizid);

    this.teacherService.getAllQuestion(quizid)
    .subscribe(
      data => {
        if(data['msg'])
        {
          this.allQuestions=data['msg']
          this.load = false
        }
        // this.one =  this.allQuestions[0]

        console.log(this.allQuestions);
       
      },
      error => {
        console.error(error);
      }


    )
  }
}
