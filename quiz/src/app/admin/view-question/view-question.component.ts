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
  public empty: any = true;
  // authSubscription: Subscription;
  constructor(private admminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.load = true;
    this.empty = true
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

          this.getAllQuestions(this.quizid)
        },
        error => {
          this.router.navigate(['/error']);
        }


      )
  }

  getAllQuestions(quizid) {
    // console.log("hahaha");
    // console.log(quizid);

    this.admminService.getAllQuestion(quizid)
      .subscribe(
        data => {
          if (data['msg']) {
            this.allQuestions = data['msg']
            this.load = false
            if (!this.allQuestions.length) {
              this.empty = true;
            }
            else {
              this.empty = false;
            }
          }


        },
        error => {
          this.router.navigate(['/error']);
        }


      )
  }

}
