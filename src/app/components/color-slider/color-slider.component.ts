import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/redux-types';
import { blueUpdated, colorDeleted, colorUpdated } from 'src/app/redux/colors.actions';


@Component({
  selector: 'app-color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.css']
})
export class ColorSliderComponent implements OnInit {
  @Input() color!: string
  _currentValue: number = 0;
  reduxValue$: Observable<number>;

  get currentValue() {
    return this._currentValue;
  }

  set currentValue(newValue: number | null){
    if(newValue !== this._currentValue)
    {
      this.store.dispatch(colorUpdated({hex: this.color, value: newValue || 1 }))
    }
    this._currentValue = newValue || 0;
  }

  constructor(private store: Store<AppState>) {
    this.reduxValue$ = store.select(state => state.colors.find(color => color.hex === this.color)!.value);
   }

  ngOnInit(): void {
    this.reduxValue$.subscribe(value => {
      this.currentValue = value;
    })
  } 

  deleteColor(): void {
    this.store.dispatch(colorDeleted({hex: this.color}))
  }

}
