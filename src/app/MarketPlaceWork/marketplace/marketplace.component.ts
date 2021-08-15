import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../template.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  templates : any
  message:any;
  submitted = false;

   constructor(private TemplateService:TemplateService ) { }

   ngOnInit(): void {
     this.TemplateService.retrieveTemplate().subscribe((data:Template[])=> {
       console.log(data);
       this.templates=data;
     });
   }


}
