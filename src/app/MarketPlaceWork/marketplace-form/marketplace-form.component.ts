import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../template.service';
import { Template } from '../template';
@Component({
  selector: 'app-marketplace-form',
  templateUrl: './marketplace-form.component.html',
  styleUrls: ['./marketplace-form.component.css']
})
export class MarketplaceFormComponent implements OnInit {

  templatess:any;



  constructor(
    private TemplateService:TemplateService ) {
      this.templatess=new Template();
     }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.templatess)
    this.TemplateService.addTemplate(this.templatess).subscribe();
  }


}
