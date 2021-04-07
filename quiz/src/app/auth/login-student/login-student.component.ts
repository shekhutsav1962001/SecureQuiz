import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {
  msg: any = [];
  avail: boolean;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    $(document).ready(function () {

      $("#sign-in-btn").click(function () {

        $(".containerr").removeClass("sign-up-mode");

      });

      $("#sign-up-btn").click(function () {
        $(".containerr").addClass("sign-up-mode");

      });

    });
  }

  onSubmitRegister(f: NgForm) {


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

    this.authService.registerStudent(JSON.stringify(f.value))
      .subscribe(
        data => {
          if (data['msg']) {
            this.msg = data['msg'];
            this.avail = true;
            return;
          }
          // this.authService.msg = "successfully registered a user!";
          window.location.reload();
          this.router.navigate(['/student']);
        },
        error => {
          this.router.navigate(['/error']);
        }


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
            // this.router.navigate(['/a']);
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

  signinup() {
    // console.log("hello1");
    this.msg = "";
    this.avail = false;
  }

}
