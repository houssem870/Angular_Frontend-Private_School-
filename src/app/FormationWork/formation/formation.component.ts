import { Component, OnInit } from '@angular/core';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
 formations : any
 message:any;
 submitted = false;
 Formation:Formation=new Formation();
  constructor(private FormationService:FormationService ) { }

  ngOnInit(): void {
    this.FormationService.retrieveFormation().subscribe((data:Formation[])=> {
      console.log(data);
      this.formations=data;
    });
  }





}
