import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  allquiz: any;
  public loading: any = true;
  public empty: any = true;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true
    this.empty = true
    this.getdata();
  }

  getdata() {
    this.adminService.getAllQuiz()
      .subscribe(
        data => {
          if (data['quiz']) {
            this.loading = false
            this.allquiz = data['quiz']
            if (!this.allquiz.length) {
              this.empty = true;
            }
            else {
              this.empty = false;
            }
          }
        },
        error => {
          // console.error(error);
          this.router.navigate(['/error']);
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
