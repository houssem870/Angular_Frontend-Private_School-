import { Component, OnInit } from '@angular/core';
import { Quiz } from '../Quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {

  quizz:any;



  constructor(
    private QuizService:QuizService ) {
    this.quizz=new Quiz();
     }



  onSubmit() {
    console.log(this.quizz)
    this.QuizService.addQuiz(this.quizz).subscribe();

  }








   ngOnInit(): void {
   }









}
