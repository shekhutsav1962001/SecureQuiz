import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.css']
})
export class CreatequizComponent implements OnInit {

  constructor(private teacherService:TeacherService,private router: Router) { }
  msg: any = [];
  avail: boolean;
  ngOnInit(): void {
  }

  createQuiz(f: NgForm) {

    this.teacherService.createQuiz(JSON.stringify(f.value))
      .subscribe(
        data => {
          if (data['msg']) {
            this.msg = data['msg'];
            this.avail = true;
            return;
          }
          this.router.navigate(['/teacher/uploadquiz']);
        },
        error =>
        {
          this.router.navigate(['/error']);
        }


      )
  }
}
