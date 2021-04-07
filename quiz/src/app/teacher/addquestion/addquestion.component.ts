import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  msg: any = [];
  avail: boolean;
  quizid:any;
  obj:any;
  options:any[]= [];
  constructor(private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
    if(this.teacherService.getQuizId()==undefined)
    {
      this.router.navigate(['/teacher/uploadquiz']);
    }
    else
    {
      this.quizid=this.teacherService.getQuizId();

    }
  }

   addQuestion(f: NgForm)
  {

    this.options.push({optionValue: '1',optionText:f.controls.optionA.value});
    this.options.push({optionValue: '2',optionText:f.controls.optionB.value});
    this.options.push({optionValue: '3',optionText:f.controls.optionC.value});
    this.options.push({optionValue: '4',optionText:f.controls.optionD.value});
    // console.log(this.options);
    this.obj = {quizid:this.quizid,options:this.options,questionText:f.controls.questionText.value,answer:f.controls.answer.value}
    // console.log(this.obj);
    this.teacherService.addQuestion(this.obj)
      .subscribe(
        data => {
          // console.log(data);
          this.router.navigate(['/teacher/uploadquiz']);
        },
        error =>
        {
          this.router.navigate(['/error']);
        }
      )
  }
}
