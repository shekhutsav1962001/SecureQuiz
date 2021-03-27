import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  // 0:<span *ngIf="timeLeft < 10">0</span>{{ timeLeft }}
  solutionArray: any[] = [];
  ansOfOneQuestion: any[] = [];
  ansKey: any[] = [];
  time: any = 10;
  timePerQuestion: any;
  interval: any;
  temp: any;
  score: any = 0;
  flageLast: any = false;
  totalQuestion: any;
  questionCounter: any = 1;
  finishflag: any = false;
  finalsubmit: boolean = false;
  // submitAvail:any = true;
  allQuestions: any[] = [
    {
      questionId: 1,
      questionText: 'a?',
      options: [
        { optionValue: '1', optionText: 'A' },
        { optionValue: '2', optionText: 'B' },
        { optionValue: '3', optionText: 'C' },
        { optionValue: '4', optionText: 'D' }
      ],
      answer: '1',

    },
    {
      questionId: 2,
      questionText: 'b?',
      options: [
        { optionValue: '1', optionText: 'A' },
        { optionValue: '2', optionText: 'B' },
        { optionValue: '3', optionText: 'C' },
        { optionValue: '4', optionText: 'D' }
      ],
      answer: '2',

    },
    {
      questionId: 3,
      questionText: 'c?',
      options: [
        { optionValue: '1', optionText: 'A' },
        { optionValue: '2', optionText: 'B' },
        { optionValue: '3', optionText: 'C' },
        { optionValue: '4', optionText: 'D' }
      ],
      answer: '3',

    },
    {
      questionId: 4,
      questionText: 'd?',
      options: [
        { optionValue: '1', optionText: 'A' },
        { optionValue: '2', optionText: 'B' },
        { optionValue: '3', optionText: 'C' },
        { optionValue: '4', optionText: 'D' }
      ],
      answer: '4',

    }
  ];
  oneQuestion: any;
  constructor(private router: Router, private authService: AuthService, private webSocketService: WebsocketService) { }

  ngOnInit(): void {
    // window.addEventListener('blur', event => {
    //   this.router.navigate(['/']);
    // localStorage.removeItem('load');
    // });

    // window.addEventListener('resize', event => {
    //   this.router.navigate(['/']);
    // localStorage.removeItem('load');

    // });

    console.log("loacal");
    console.log( );
    if(!localStorage.getItem('load'))
    {
      localStorage.setItem('load', '1');
    }
    else
    {
      alert("you reloaded this page");
    }

    this.createAns();
    this.shuffleQuestion();
    this.webSocketService.listen('test event').subscribe(
      (data) => {
        console.log(data);
      }
    )

    this.timePerQuestion = this.time;
    this.totalQuestion = this.allQuestions.length;
    this.oneQuestion = this.allQuestions[0];
    this.countdown();

  }

  shuffleQuestion() {
    var m = this.allQuestions.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.allQuestions[m];
      this.allQuestions[m] = this.allQuestions[i];
      this.allQuestions[i] = t;
    }
    this.shuffleOption();
  }

  shuffleOption() {
    for (let i = 0; i < this.allQuestions.length; i++) {
      var x = this.allQuestions[i].options;
      var m = 4, t, j;
      while (m) {
        j = Math.floor(Math.random() * m--);
        t = x[m];
        x[m] = x[j];
        x[j] = t;
      }

    }
  }



  createAns() {
    for (let index = 0; index < this.allQuestions.length; index++) {
      const id = this.allQuestions[index].questionId;
      const ans = this.allQuestions[index].answer;
      this.ansKey.push({ qid: id, ans: ans });

    }
    // console.log("key");
    // console.log(this.ansKey);
  }
  private countdown() {

    this.interval = setInterval(() => {
      if (this.timePerQuestion > 0) {
        this.timePerQuestion--;
      }
      if (this.timePerQuestion == 0) {
        // reset
        if (this.questionCounter + 1 <= this.totalQuestion) {
          this.oneQuestion = this.allQuestions[this.questionCounter];
          this.questionCounter++;
          if (this.questionCounter == this.totalQuestion) {
            this.flageLast = true;
          }
          this.timePerQuestion = this.time;
          console.log("reset timer");
        }
        else {
          // this.router.navigate(['/']);
          this.myStopFunction(this.interval);
          localStorage.removeItem('load');
          this.authService.testdone(JSON.stringify(this.ansOfOneQuestion))
            .subscribe(
              data => {
                if (data['msg']) {
                  console.log('data of msh');
                  console.log(data['msg']);
                  // this.msg = ;
                  // this.avail = true;
                  // return;
                }

                // this.router.navigate(['/teacher/teacherhome']);
              },
              error => { console.error(error); }

            )
        }

      }
    }, 1000);

    // console.log("hloo");
  }

  myStopFunction(a) {
    clearInterval(a);
  }

  nextQuestion() {
    // console.log("button clicked");

    if (this.questionCounter != this.totalQuestion) {

      this.questionCounter++;
      if (this.questionCounter == this.totalQuestion) {
        this.flageLast = true;
      }
      this.oneQuestion = this.allQuestions[this.questionCounter - 1];
      this.timePerQuestion = this.time;

    }
    if (this.questionCounter > this.totalQuestion) {
      // this.router.navigate(['/']);
      this.myStopFunction(this.interval);
      this.authService.testdone(JSON.stringify(this.ansOfOneQuestion))
        .subscribe(
          data => {
            if (data['msg']) {
              console.log('data of msh');
              console.log(data['msg']);
              // this.msg = ;
              // this.avail = true;
              // return;
            }
            // this.router.navigate(['/teacher/teacherhome']);
            //            this.router.navigate(['/']);
          },
          error => { console.error(error); }

        )
    }
  }
  navigatehome() {
    console.log("naa");
  }

  answer(qid, ans) {
    this.temp = this.ansOfOneQuestion.pop()
    if (this.temp) {
      if (this.temp.qid != qid) {
        this.ansOfOneQuestion.push(this.temp);

      }
    }
    this.ansOfOneQuestion.push({ qid: qid, ans: ans });
    // console.log(this.ansOfOneQuestion);
  }

  getScore() {
    // console.log("in get score");
    // console.log(this.ansKey);
    // console.log(this.ansOfOneQuestion);
    for (let i = 0; i < this.ansOfOneQuestion.length; i++) {
      for (let j = 0; j < this.ansKey.length; j++) {
        if (this.ansOfOneQuestion[i].qid == this.ansKey[j].qid) {
          if (this.ansOfOneQuestion[i].ans == this.ansKey[j].ans) {
            this.score++;
          }
        }
      }
    }

    // console.log("yyour score is ", this.score);
  }

  lastsubmit() {
    this.finalsubmit = true;
    localStorage.removeItem('load');
    this.myStopFunction(this.interval);
    this.getScore();
    this.authService.testdone(JSON.stringify(this.ansOfOneQuestion))
      .subscribe(
        data => {
          if (data['msg']) {
            console.log('data of msh');
            console.log(data['msg']);
            // this.msg = ;
            // this.avail = true;
            // return;
          }
          // this.router.navigate(['/teacher/teacherhome']);
          //            this.router.navigate(['/']);
        },
        error => { console.error(error); }

      )
  }
}
