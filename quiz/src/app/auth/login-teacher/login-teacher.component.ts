import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { catchError, retry } from 'rxjs/operators';
import * as $ from 'jquery';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.css']
})
export class LoginTeacherComponent implements OnInit {

  msg: any = [];
  avail: boolean;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    $(document).ready(function () {

      $("#sign-in-btn").click(function () {
        $(".containerr").addClass("sign-up-mode");

      });

      $("#sign-up-btn").click(function () {
        $(".containerr").removeClass("sign-up-mode");
      });

    });
  }

  signinup() {
    // console.log("hello1");
    this.msg = "";
    this.avail = false;
  }

  onSubmitRegister(f: NgForm) {

    // for (var val of this.arr) {
    //   var a = val['email'];
    //   var b = f.controls.email.value;
    //   if (a == b) {
    //     this.msg = "User already exist with this user name (email)!!";
    //     this.avail = true;
    //     return;
    //   }
    // }

    if (f.controls.p1.value != f.controls.p2.value) {
      this.msg = "Password   doesn't match";
      this.avail = true;
      return;
    }

    if (!f.valid) {
      this.msg = "Invalid Form Fields";
      this.avail = true;
      return;
    }

    this.authService.registerTeacher(JSON.stringify(f.value))
      .subscribe(
        data => {
          if (data['msg']) {
            this.msg = data['msg'];
            this.avail = true;
            return;
          }
          // this.authService.msg = "successfully registered a user!";
          window.location.reload();
          this.router.navigate(['/teacher']);
        },
        error => {      this.router.navigate(['/error']);}

      )
  }

  onSubmitLogin(f: NgForm) {

    if (!f.valid) {
      this.msg = "Invalid Email or Password";
      this.avail = true;
      return;
    }


    this.authService.login(JSON.stringify(f.value))
      .subscribe(
        data => {
          // console.log(data);
          if (data['msg']) {
            this.msg = data['msg'];
            this.avail = true;
            return;
          }
          if (data['role'] == "admin") {
            // console.log("admin");
            localStorage.setItem('token', data['token']);

            localStorage.setItem('admin', 'yes');
            localStorage.setItem('student', 'no');
            localStorage.setItem('teacher', 'no');
            // this.router.navigate(['/admin']);
            // this.router.navigate(['/']);
            this.router.navigate(['/admin/adminhome']);
          }
          else if (data['role'] == "student") {
            // console.log("student")
            if (data['blocked'] == true) {
              this.msg = "You are blocked by Admin wait until admin unblock you!!!";
              this.avail = true;
              return;
            }
            else {
              // console.log("not blocked");
              localStorage.setItem('token', data['token']);
              localStorage.setItem('userid', f.controls.email.value);

              localStorage.setItem('admin', 'no');
              localStorage.setItem('student', 'yes');
              localStorage.setItem('teacher', 'no');
              this.router.navigate(['/student/studenthome']);
            }
            // this.router.navigate(['/']);
          }
          else {
            // console.log("teacher");

            if (data['blocked'] == true) {
              this.msg = "You are blocked by Admin wait until admin unblock you!!!";
              this.avail = true;
              return;
            }
            else {
              localStorage.setItem('token', data['token']);
              localStorage.setItem('userid', f.controls.email.value);

              localStorage.setItem('admin', 'no');
              localStorage.setItem('student', 'no');
              localStorage.setItem('teacher', 'yes');
              this.router.navigate(['/teacher/teacherhome']);
            }

          }

        },
        error => {      this.router.navigate(['/error']); }
      )
  }


}
