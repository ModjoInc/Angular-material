import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {
  // tslint:disable-next-line:max-line-length
  MatNativeDateModule, MatIconModule, MatDatepickerModule, MatSelectModule,  MatCheckboxModule, MatRadioModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatChipsModule
} from '@angular/material';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SassComponent } from './sass/sass.component';

@NgModule({
  declarations: [
    AppComponent,
    SassComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
