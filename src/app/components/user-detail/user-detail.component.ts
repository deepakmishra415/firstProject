import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../shared/store/counter.action';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  public email = 'deepak.mishra@gmail.com'

  count: Observable<number>;

  constructor(private store: Store<{ count: number }>) {this.count = store.select('count');}


  ngOnInit(): void {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
