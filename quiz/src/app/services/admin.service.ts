import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public avail: boolean = false;
  public msg: string = "";
  private baseUri: string = "http://localhost:3000/admin";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }

  registerStudent(body: any) {
    return this.http.post('http://127.0.0.1:3000/registerstudnet', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

}
