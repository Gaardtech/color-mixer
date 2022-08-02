import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectColorComboHex, selectColorComboRgb } from 'src/app/redux/colors.selectors';
import { AppState, ColorsState } from 'src/app/redux-types';

@Component({
  selector: 'app-color-display',
  templateUrl: './color-display.component.html',
  styleUrls: ['./color-display.component.css']
})
export class ColorDisplayComponent implements OnInit { 
colorCombo$: Observable<string>;
colorString: string = "";


get style() {
  return`
  background-color: ${this.colorString};
  height: 400px;
  width: 700px;
  margin-bottom: 10px`;
}


constructor(
    private store: Store<AppState>
    ) {
      this.colorCombo$ = store.select(selectColorComboHex);
     }

  ngOnInit(): void {
    this.colorCombo$.subscribe((rgbString: string) => {
      this.colorString = rgbString;
      
    })
  }

}
