import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-seequestion',
  templateUrl: './seequestion.component.html',
  styleUrls: ['./seequestion.component.css']
})
export class SeequestionComponent implements OnInit {
  quizid: any;
  allQuestions: any;

  load: any
  del: any;
  empty: any = true;
  // authSubscription: Subscription;
  constructor(private teacherService: TeacherService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.load = true;
    this.empty = true;
    if (this.teacherService.getQuizId() == undefined) {
      this.router.navigate(['/teacher/teacherhome']);
    }
    else {
      if (this.teacherService.getDelete() == undefined) {
        this.router.navigate(['/teacher/teacherhome']);
      }
      else {
        this.del = this.teacherService.getDelete()
        this.quizid = this.teacherService.getQuizId();
        // console.log(this.del);
        this.getAllQuestions(this.quizid)
      }

    }
    // this.authSubscription = this.route.queryParams.subscribe(
    //   (params: Params) => {
    //     console.log("heyy");
    //     console.log(params);
    //   });
  }

  delete(one) {
    this.teacherService.deleteQuestion(one._id)
      .subscribe(
        data => {
          // console.log(data);
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

    this.teacherService.getAllQuestion(quizid)
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
          // this.one =  this.allQuestions[0]

          // console.log(this.allQuestions);

        },
        error => {
          this.router.navigate(['/error']);
        }


      )
  }
}
