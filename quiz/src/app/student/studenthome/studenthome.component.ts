import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  allquiz: any;
  public loading: any = true;
  public empty: any = true;
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true 
    this.empty = true
    this.getdata();
  }

  getdata() {
    this.studentService.getAllQuiz()
      .subscribe(
        data => {
          if (data['quiz']) {
            this.loading = false
            this.allquiz = data['quiz']
            console.log(this.allquiz.length);
            if (!this.allquiz.length) {
              this.empty = true;
            }
            else {
              this.empty = false;
            }
          }
        },
        error => {
          console.error(error);
        })
  }

  playquiz(item) {
    this.studentService.setQuizId(item._id);
    this.router.navigate(['/student/playquiz']);
  }
}
