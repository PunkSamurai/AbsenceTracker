import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abs } from 'src/app/Absence';
<<<<<<< HEAD
import { Collab } from 'src/app/Collabs';
import { AbsService } from 'src/app/services/abs.service';
import { CollabsService } from 'src/app/services/collabs.service';
import { TacheService } from 'src/app/services/tache.service';
import { Tache } from 'src/app/Taches';
=======
import { AbsService } from 'src/app/services/abs.service';
>>>>>>> 5a85f8ccf60281168384e3419c71bc404ddbc7cc

@Component({
  selector: 'app-update-abs',
  templateUrl: './update-abs.component.html',
  styleUrls: ['./update-abs.component.css']
})
export class UpdateAbsComponent implements OnInit {
<<<<<<< HEAD
  collabs?: Collab[];
  taches?: Tache[];
  id!: number;
  abs : Abs = new Abs();
  constructor(private absService: AbsService, private route: ActivatedRoute,private collabService : CollabsService,private tacheService : TacheService,private router: Router) { }
=======

  id!: number;
  abs : Abs = new Abs();
  constructor(private absService: AbsService, private route: ActivatedRoute,
    private router: Router) { }
>>>>>>> 5a85f8ccf60281168384e3419c71bc404ddbc7cc

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("id abs" , this.abs)
    this.absService.getAbsById(this.id).subscribe(data =>{
    this.abs = data;
    console.log("abs" ,this.abs)
  })
  }
    goToAbsList(){
    this.router.navigate(['/abs']);
  }
<<<<<<< HEAD

  onSubmit(){
    this.absService.updateAbs(this.id, this.abs).subscribe((data)=> console.log(data))
    console.log("request body",this.abs)
    this.goToAbsList();
    }

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
=======
  
  onSubmit(){
    /*this.absService.(this.matr, this.collab).subscribe((data)=> console.log(data))
    console.log("request body",this.collab) */
    this.goToAbsList();
    }

>>>>>>> 5a85f8ccf60281168384e3419c71bc404ddbc7cc

}
