import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-getoneformation',
  templateUrl: './getoneformation.component.html',
  styleUrls: ['./getoneformation.component.css']
})
export class GetoneformationComponent implements OnInit {
 idFormation : any
 formations:any
	constructor(private FormationService:FormationService ,
	  private route: ActivatedRoute,

	) {



  }


	ngOnInit() {

    this.idFormation = this.route.snapshot.params.idFormation
    console.log(this.idFormation)

    this.FormationService.retrieveOneFormation(this.idFormation).subscribe((data:Formation[])=> {
      console.log(data);
      this.formations=data;
    });
}
}
