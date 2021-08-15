import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../Quiz';
import { QuizService } from '../quiz.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-passquiz',
  templateUrl: './passquiz.component.html',
  styleUrls: ['./passquiz.component.css']
})
export class PassquizComponent implements OnInit {
  private readonly notifier: NotifierService;

  idQuiz : any
  quiz:any
   constructor(notifierService: NotifierService,private QuizService:QuizService ,
     private route: ActivatedRoute,


   ) {
    this.notifier = notifierService;



   }

submitquiz(){
  console.log(this.quiz)
  this.notifier.show({
    type: 'success',
    message: 'The correct answer is :'+this.quiz?.reponseCorrecte+'',
  });

}
   ngOnInit() {

     this.idQuiz = this.route.snapshot.params.idQuiz
     console.log(this.idQuiz)

     this.QuizService.UserParticipeQuiz(this.idQuiz).subscribe((data:Quiz[])=> {
       console.log(data);
       this.quiz=data;
     });
 }

}
