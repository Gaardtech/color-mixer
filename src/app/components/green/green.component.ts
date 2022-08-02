import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store'
import { greenUpdated } from 'src/app/redux/colors.actions';
import { AppState } from 'src/app/redux-types';
import { selectGreen } from 'src/app/redux/colors.selectors';
@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.css']
})
export class GreenComponent implements OnInit {
  _currentValue: number = 0;
  greenuxValue$: Observable<number>;

  get currentValue() {
    return this._currentValue;
  }

  set currentValue(newValue: number | null){
    if(newValue !== this._currentValue)
    {
      this.store.dispatch(greenUpdated({value: newValue || 0 }))
    }
    this._currentValue = newValue || 0;
  }

  constructor(private store: Store<AppState>) {
    this.greenuxValue$ = store.select(selectGreen);
   }

  ngOnInit(): void {
    this.greenuxValue$.subscribe(value => {
      this.currentValue = value;
    })
  }
}
