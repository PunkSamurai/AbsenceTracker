import { Component, OnInit } from '@angular/core';
import { Abs } from 'src/app/Absence';
import { AbsService } from 'src/app/services/abs.service';
import {MatDialog} from '@angular/material/dialog'
import { AbsDetailsComponent } from '../abs-details/abs-details.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-abs',
  templateUrl: './abs.component.html',
  styleUrls: ['./abs.component.css']
})
export class AbsComponent implements OnInit {
  Absens?: Abs[];
  Abs?: Abs;

  constructor(private router : Router,private matDialog: MatDialog,private absService: AbsService) {   this.getAbs();}

  ngOnInit(): void {
    this.getAbs();
  }
  private getAbs(){
    this.absService.getAbs().subscribe(items =>{
       //console.log("abssesns",items);
        this.Absens=items;
        console.log("Abss",items);
      });
    
  }
  viewDetails(id : number){
    this.matDialog.open(AbsDetailsComponent,
       {data : id });

    }
    goToAdd(){
      this.router.navigate(["add-abs"]);
    }
  
}

/*

function arrayToJSONObject (k: any){
  
//array.
var keyd = ["collab_nom", "collab_prenom", "tache", "date","h_debut","h_fin","motif"]

k.unshift(keyd)

    var keys = k[0];
 
    //vacate keys from main array
    var newArr = k.slice(1, k.length);
 
    var formatted = [],
    data = newArr,
    cols = keys,
    l = cols.length;
    for (var i=0; i<data.length; i++) {
            var d = data[i],
                    o = {} as any;
            for (var j=0; j<l; j++)
                    o[cols[j]] = d[j];
            formatted.push(o);
    }
    console.log("shlo",formatted);

  
}


*/