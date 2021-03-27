import { Component, OnInit } from '@angular/core';
// import { WebcamImage } from 'ngx-webcam';
// import { Subject, Observable } from 'rxjs';
@Component({
  selector: 'app-t',
  templateUrl: './t.component.html',
  styleUrls: ['./t.component.css']
})
export class TComponent implements OnInit {

  constructor() {
    // ngZone:NgZone
    //   window['onSignIn'] = user => ngZone.run(()=>{
    //     this.dosomething(user);
    // })
  }

  // dosomething(googleuser)
  // {
  //   console.log(googleuser);
  // }



  // public webcamImage: WebcamImage = null;

  // // webcam snapshot trigger
  // private trigger: Subject<void> = new Subject<void>();
  // triggerSnapshot(): void {
  //   this.trigger.next();
  // }
  // handleImage(webcamImage: WebcamImage): void {
  //   console.info('received webcam image', webcamImage);
  //   this.webcamImage = webcamImage;
  // }

  // public get triggerObservable(): Observable<void> {
  //   return this.trigger.asObservable();
  // }



  ngOnInit() {

  }
}
