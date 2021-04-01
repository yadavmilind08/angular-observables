import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isActivated = false;
  subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.subscription = this.userService.activatedEmitter.subscribe(didActivated => {
      this.isActivated = didActivated;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
