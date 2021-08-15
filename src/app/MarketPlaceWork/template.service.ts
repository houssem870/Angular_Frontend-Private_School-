import { HttpClient } from '@angular/common/http';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private baseUrl="http://localhost:8082/"
  constructor(private Http:HttpClient) { }



  retrieveTemplate():Observable<Template[]>{
    return this.Http.get<Template[]>(`${this.baseUrl}`+"templates");
  }

  addTemplate(Template:any){
    return this.Http.post(`${this.baseUrl}`+"AddTemplate",Template);
  }

}
