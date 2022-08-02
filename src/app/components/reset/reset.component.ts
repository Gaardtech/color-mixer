import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store'
import { resetClicked } from 'src/app/redux/colors.actions';
import { AppState } from 'src/app/redux-types';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }


  buttonClicked(){
    this.store.dispatch(resetClicked());
  }

}
