import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacherhome',
  templateUrl: './teacherhome.component.html',
  styleUrls: ['./teacherhome.component.css']
})
export class TeacherhomeComponent implements OnInit {

  msg: any = [];
  empty: boolean;
  avail: boolean;
  public quiz: any[];
  public loading: any = true;
  constructor(private teacherService: TeacherService, private router: Router) { }
  ngOnInit(): void {
    this.loading = true
    this.empty = false;
    this.getdata();
  }

  getdata() {
    this.teacherService.gethomequiz()
      .subscribe(
        data => {
          if (data['quiz']) {
            this.quiz = data['quiz']
            this.loading = false;
            // console.log(this.quiz.length);
            if (!this.quiz.length) {
              this.empty = true;

            }
            else {
              this.empty = false;
            }
          }

          // console.log(data);
          // this.router.navigate(['/teacher/teacherhome']);
        },
        error => {
          this.router.navigate(['/error']);
        }


      )

  }

  viewQuestion(q) {
    this.teacherService.setQuizId(q._id);
    this.teacherService.setDelete(q.upload)
    this.router.navigate(['/teacher/seequestion']);
  }

  delete(quiz) {
    this.teacherService.deletequiz(quiz._id)
      .subscribe(
        data => {

          // console.log(data);
          this.getdata();
          // this.router.navigate(['/teacher/teacherhome']);
        },
        error => {
          this.router.navigate(['/error']);
        }


      )
  }
}
