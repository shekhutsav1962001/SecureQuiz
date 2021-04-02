import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  allquiz:any;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata()
  {
    this.adminService.getAllQuiz()
      .subscribe(
        data => {

          this.allquiz = data['quiz']
          console.log("yaaha");
          console.log(this.allquiz);

        },
        error => {
          console.error(error);
        }


      )

  }
  viewQuestion(q) {
    this.adminService.setQuizId(q._id);
    this.adminService.setDelete(q.upload)
    this.router.navigate(['/admin/seequestion']);
  }

  delete(quiz) {
    this.adminService.deletequiz(quiz._id)
      .subscribe(
        data => {

          console.log(data);
          this.getdata();
          // this.router.navigate(['/teacher/teacherhome']);
        },
        error => {
          console.error(error);
        }


      )
  }

}
