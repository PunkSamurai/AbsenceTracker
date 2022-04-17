import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Abs } from 'src/app/Absence';
import { Collab } from 'src/app/Collabs';
import { AbsService } from 'src/app/services/abs.service';
import { CollabsService } from 'src/app/services/collabs.service';
import { TacheService } from 'src/app/services/tache.service';
import { Tache } from 'src/app/Taches';

@Component({
  selector: 'app-add-abs',
  templateUrl: './add-abs.component.html',
  styleUrls: ['./add-abs.component.css']
})
export class AddAbsComponent implements OnInit {
  collabs?: Collab[];
  taches?: Tache[];
  abs: Abs = new Abs();
  constructor(private absService:AbsService,private collabService : CollabsService,private tacheService : TacheService,private router :Router) {
  
    this.collabService.getCollabs().subscribe(items =>{
      console.log("iteeems",items);
      this.collabs = items;
   })}

   private getCollabs(){
    this.collabService.getCollabs().subscribe(items =>{
      console.log("collabs",items);
      this.collabs = items;
    })
  }
  private getTaches(){
    this.tacheService.getTaches().subscribe(items =>{
      console.log("taches",items);
      this.taches = items;
    })
  }
  saveAbs() {
    this.absService.addAbs(this.abs,this.abs.collab_matr!,this.abs.tache_id!).subscribe(
      (data) =>  console.log(data));
      this.absService.setSuccess("Absence added succesfully ");
      this.absService.setStateType("","success");
      this.goToAbsList(); 
  }

  ngOnInit(): void {
    this.getCollabs();
    this.getTaches();
  }
onSubmit(){
  console.log(this.abs)
  
  this.saveAbs();
}
goToAbsList(){
  this.router.navigate(['/abs']);

}


}
