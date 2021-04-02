import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {

  quizid: any;
  allQuestions: any;

  load: any
  del: any;
  // authSubscription: Subscription;
  constructor(private admminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.load = true;
    if (this.admminService.getQuizId() == undefined) {
      this.router.navigate(['/admin/adminhome']);
    }
    else {
      if (this.admminService.getDelete() == undefined) {
        this.router.navigate(['/admin/adminhome']);
      }
      else {
        this.del = this.admminService.getDelete()
        this.quizid = this.admminService.getQuizId();
        this.getAllQuestions(this.quizid)
      }

    }
  }

  delete(one) {
    this.admminService.deleteQuestion(one._id)
      .subscribe(
        data => {
          console.log(data);
          this.getAllQuestions(this.quizid)
        },
        error => {
          console.error(error);
        }


      )
  }

  getAllQuestions(quizid) {
    console.log("hahaha");
    console.log(quizid);

    this.admminService.getAllQuestion(quizid)
      .subscribe(
        data => {
          if (data['msg']) {
            this.allQuestions = data['msg']
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
