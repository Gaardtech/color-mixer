import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store'
import { blueUpdated } from 'src/app/redux/colors.actions';
import { AppState } from 'src/app/redux-types';
import { selectBlue } from 'src/app/redux/colors.selectors';
@Component({
  selector: 'app-blue',
  templateUrl: './blue.component.html',
  styleUrls: ['./blue.component.css']
})
export class BlueComponent implements OnInit {
  _currentValue: number = 0;
  blueuxValue$: Observable<number>;

  get currentValue() {
    return this._currentValue;
  }

  set currentValue(newValue: number | null){
    if(newValue !== this._currentValue)
    {
      this.store.dispatch(blueUpdated({value: newValue || 0 }))
    }
    this._currentValue = newValue || 0;
  }

  constructor(private store: Store<AppState>) {
    this.blueuxValue$ = store.select(selectBlue);
   }

  ngOnInit(): void {
    this.blueuxValue$.subscribe(value => {
      this.currentValue = value;
    })
  }
}
