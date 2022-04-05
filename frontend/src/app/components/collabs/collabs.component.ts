import { Component, OnInit } from '@angular/core';
import { Collab } from 'src/app/Collabs';
import { CollabsService } from 'src/app/services/collabs.service';

@Component({
  selector: 'app-collabs',
  templateUrl: './collabs.component.html',
  styleUrls: ['./collabs.component.css']
})
export class CollabsComponent implements OnInit {

  collabs?: Collab[];
  constructor(private collabService : CollabsService) {
    this.collabService.getCollabs().subscribe(items =>{
      console.log("iteeems",items);
      this.collabs = items;
   })}

  private getCollabs(){
    this.collabService.getCollabs().subscribe(items =>{
      console.log("iteeems",items);
      this.collabs = items;
    })
    
  }
  ngOnInit(): void {
    this.getCollabs();
  }
  

}
