import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider'
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { ResetComponent } from './components/reset/reset.component';
import { StoreModule } from '@ngrx/store';
import { colorsReducer } from './redux/colors.reducer';
import { ColorDisplayComponent } from './components/color-display/color-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorSliderComponent } from './components/color-slider/color-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    ResetComponent,
    ColorDisplayComponent,
    ColorSliderComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      colors: colorsReducer, 
    }, {}),
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
