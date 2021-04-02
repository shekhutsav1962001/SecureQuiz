import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }


  ngOnInit(): void {
  }
  logoutuser() {
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }
}
