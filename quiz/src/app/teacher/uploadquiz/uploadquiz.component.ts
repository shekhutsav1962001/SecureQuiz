import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-uploadquiz',
  templateUrl: './uploadquiz.component.html',
  styleUrls: ['./uploadquiz.component.css']
})
export class UploadquizComponent implements OnInit {

  msg: any = [];
  avail: boolean;
  public quiz: any[];
  empty: boolean;
  public loading: any = true;
  constructor(private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true
    this.empty = false;
    this.getdata();
  }


  getdata() {
    this.teacherService.getuploadquiz()
      .subscribe(
        data => {
          if (data['quiz']) {
            this.loading = false
            this.quiz = data['quiz']
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

  add(quiz) {
    this.teacherService.setQuizId(quiz._id);
    this.router.navigate(['/teacher/addquestion']);
  }

  upload(quiz) {
    // console.log("upload");
    // console.log(quiz);
    // console.log(quiz._id);
    this.teacherService.uploadquiz(quiz._id)
      .subscribe(
        data => {

          // this.quiz = data['quiz']
          // console.log(data);
          if (data['msg']) {
            this.msg = data['msg'];
            this.avail = true;
            return;
          }
          if (data['message']) {
            this.router.navigate(['/teacher/teacherhome']);
          }
          else {
            this.msg = "something went wrong!!";
            this.avail = true;
            return;
          }
        },
        error => {
          this.router.navigate(['/error']);
        }


      )
  }

  delete(quiz) {
    this.teacherService.deletequiz(quiz._id)
      .subscribe(
        data => {

          // console.log(data);
          this.router.navigate(['/teacher/teacherhome']);
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
}
