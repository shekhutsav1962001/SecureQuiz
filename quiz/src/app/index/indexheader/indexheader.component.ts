import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-indexheader',
  templateUrl: './indexheader.component.html',
  styleUrls: ['./indexheader.component.css']
})
export class IndexheaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    // this.check();
  }

  check() {
    this.authService.check().subscribe(
      data => {
        console.log(data);
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {
            this.authService.logoutUser();
            this.router.navigate(['/'])

        }
        console.log(error);
      }
    )
  }
}
