import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from './formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
private baseUrl="http://localhost:8082/"
  constructor(private Http:HttpClient) { }

  retrieveFormation():Observable<Formation[]>{
    return this.Http.get<Formation[]>(`${this.baseUrl}`+"GetFormations");
  }
   addFormation(Formation:any){
    return this.Http.post(`${this.baseUrl}`+"AddFormation",Formation);
  }



  retrieveOneFormation(id: any):Observable<Formation[]>{
    return this.Http.get<Formation[]>(`${this.baseUrl}`+"retrieveFormation/"+id);
  }
}
