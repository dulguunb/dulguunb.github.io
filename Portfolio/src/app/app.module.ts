import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    BasicInfoComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  exports:[
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
