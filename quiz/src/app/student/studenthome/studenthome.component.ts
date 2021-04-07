import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  allquiz: any;
  public loading: any = true;
  public empty: any = true;
  constructor(private studentService: StudentService, private router: Router, private webSocketService: WebsocketService) { }

  ngOnInit(): void {
    this.loading = true
    this.empty = true
    this.webSocketService.listen('quizcrud').subscribe(
      (data) => {
        this.getdata()
      }
    )
    this.getdata();
  }

  getdata() {
    this.studentService.getAllQuiz()
      .subscribe(
        data => {
          if (data['quiz']) {
            this.loading = false
            this.allquiz = data['quiz']
            // console.log(this.allquiz.length);
            if (!this.allquiz.length) {
              this.empty = true;
            }
            else {
              this.empty = false;
            }
          }
        },
        error => {
          this.router.navigate(['/error']);
        })
  }

  playquiz(item) {
    this.studentService.setQuizId(item._id);
    this.router.navigate(['/student/playquiz']);
  }
}
