import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponentComponent implements OnInit {

  res: any = [ ];
  questions = [ ];
  players = [];
  playRes: any[];
  counter:number = 10;
  i:number=0;
  name: string;
  score:number=0;
  questionCounter = 0;
  shouldDisplayQuestions = false;
  currentQuestion : any;

//  quesCount=0;

  gameOver = false;
 

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('called showPlayer');
  this.http.get('http://localhost:3000/players').subscribe((playres: any) => {
  this.players = playres;
  //this.score=playres.score;
  for(let i = 0; i < this.tiles.length;i++){
    this.tiles[i].text = this.players[i].name +" : "+ this.players[i].score;
  }
});
    
  }

  showQuestions()
  {
    console.log('called showQuestions');
    this.http.get('http://localhost:3000/questions').subscribe((res: any) => {
    this.questions = res;
    this.currentQuestion = this.questions[this.questionCounter];
    this.shouldDisplayQuestions = true;
    this.gameClock();
    console.log(this.questions[0].options);

    });
  }

  gameClock() {
    const intervalMain = setInterval(() => {
    this.counter--;
    if (this.counter <= 0) {
      this.nextQuestion();
      //this.resetTimer();
      if(this.questionCounter==7)
      {
        clearInterval(intervalMain);
        this.gameOver=true;
      }
    }
  }, 1000);
}

nextQuestion(){
  this.resetTimer();
  this.questionCounter++;
  this.currentQuestion = this.questions[this.questionCounter];
}

resetTimer(){
  this.i++;
  //this.quesCount++;
  this.score+=this.counter*2;
  this.counter=10;
}
/*
showPlayer(){
  console.log('called showPlayer');
  this.http.get('http://localhost:3000/players').subscribe((playres: any) => {
  this.players = playres;
  this.score=playres.score;
});
}*/

tiles: Tile[] = [
  {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
  {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
  {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
];

}
