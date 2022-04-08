import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TacheService } from 'src/app/services/tache.service';
import { Tache } from 'src/app/Taches';

@Component({
  selector: 'app-add-tache-to-service',
  templateUrl: './add-tache-to-service.component.html',
  styleUrls: ['./add-tache-to-service.component.css']
})
export class AddTacheToServiceComponent implements OnInit {


  tache:Tache=new Tache();
  id!:number;

  constructor(private tacheService:TacheService,private router :Router,private route :ActivatedRoute) { }

  goToServiceList(){
    this.router.navigate(['/services']);
  }

  saveTache(id:any,tache:Tache) {
    this.tacheService.addTache(tache,id).subscribe(
      (data) =>  console.log(data));
      this.goToServiceList(); 
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  }

  onSubmit(){
    this.saveTache(this.id,this.tache);

  }

}
