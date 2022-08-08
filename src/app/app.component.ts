import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './redux-types';
import { colorAdded } from './redux/colors.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
colors: string [] = [];
colorInputValue: string = '';
    constructor(private store: Store<AppState>,) {

    }

    ngOnInit(): void {
      this.store
      .select(state => state.colors)
      .subscribe(colors => {
        this.colors = colors.map(color => color.hex);
      })
      
    }

    addColor(){
      this.store.dispatch(colorAdded({hex: this.colorInputValue}));
      this.colorInputValue = ''
    }


}
