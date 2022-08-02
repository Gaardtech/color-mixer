import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store'
import { redUpdated } from 'src/app/redux/colors.actions';
import { AppState } from 'src/app/redux-types';
import { selectRed } from 'src/app/redux/colors.selectors';
@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {
  _currentValue: number = 0;
  reduxValue$: Observable<number>;

  get currentValue() {
    return this._currentValue;
  }

  set currentValue(newValue: number | null){
    if(newValue !== this._currentValue)
    {
      this.store.dispatch(redUpdated({value: newValue || 0 }))
      console.log(newValue)
      console.log(this._currentValue)
      console.log("updated")
    }
    this._currentValue = newValue || 0;
    
  }

  constructor(private store: Store<AppState>) {
    this.reduxValue$ = store.select(selectRed);
   }

  ngOnInit(): void {
    this.reduxValue$.subscribe(value => {
      this.currentValue = value;
    })
  }
}
