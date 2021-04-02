import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public avail: boolean = false;
  private quizid: any;
  public msg: string = "";
  private baseUri: string = "http://localhost:3000/student/";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }

  getAllQuiz() {
    return this.http.get(this.baseUri + "getallquiz", { headers: this.headers });
  }

  setQuizId(id) {
    this.quizid = id;
  }

  getQuizId() {
    return this.quizid;
  }
  getAllQuestion(id) {
    return this.http.get(this.baseUri + "getallquestion/" + id, { headers: this.headers });
  }

  block()
  {
    return this.http.put(this.baseUri + "blockme", {}, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
