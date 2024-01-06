import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnakeAndLadderGameComponent } from './snakeandladdergame/snakeandladdergame.component';

@NgModule({
  declarations: [
    AppComponent,
    SnakeAndLadderGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
