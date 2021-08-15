import { Component, OnInit } from '@angular/core';
import { Quiz } from '../Quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizz : any
  message:any;
  submitted = false;
  Quiz:Quiz=new Quiz();
   constructor(private QuizService:QuizService ) { }

   ngOnInit(): void {
     this.QuizService.retrieveQuiz().subscribe((data:Quiz[])=> {
       console.log(data);
       this.quizz=data;
     });
   }



}
