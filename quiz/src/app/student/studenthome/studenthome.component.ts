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

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.studentService.getAllQuiz()
      .subscribe(
        data => {
          this.allquiz = data['quiz']
          console.log(this.allquiz);
        },
        error => {
          console.error(error);
        })
  }

  playquiz(item)
  {
    this.studentService.setQuizId(item._id);
    this.router.navigate(['/student/playquiz']);
  }
}
