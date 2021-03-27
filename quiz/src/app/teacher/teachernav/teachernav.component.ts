import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-teachernav',
  templateUrl: './teachernav.component.html',
  styleUrls: ['./teachernav.component.css']
})
export class TeachernavComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  logoutuser() {
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }
}
