
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//import { HomeComponentComponent } from './home-component/home-component.component';
//import { HeaderComponentComponent } from './home-component/header-component/header-component.component';
import { QuizComponentComponent } from './quiz/quiz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MatDividerModule} from '@angular/material/divider';

//import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponentComponent,
    //HeaderComponentComponent,
    QuizComponentComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //MatToolbarModule,
    MatGridListModule,
    //MatDividerModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }