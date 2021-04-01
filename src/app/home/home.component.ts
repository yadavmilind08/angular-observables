import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  firstObsSubscription: Subscription

  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable: Observable<number> = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);  // next is to emit new value
        if (count > 3) {
          observer.error(new Error("Count is greater than 3!"))
        }
        count++;
      }, 1000)
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    })
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
