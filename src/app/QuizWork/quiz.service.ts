import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from './Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl="http://localhost:8082/"
  constructor(private Http:HttpClient) { }

  retrieveQuiz():Observable<Quiz[]>{
    return this.Http.get<Quiz[]>(`${this.baseUrl}`+"GetQuiz");
  }
   addQuiz(Quiz:any){
    return this.Http.post(`${this.baseUrl}`+"AddQuiz",Quiz);
  }

  UserParticipeQuiz(id: any):Observable<Quiz[]>{
    return this.Http.get<Quiz[]>(`${this.baseUrl}`+"retrieveQuiz/"+id);
  }
}
