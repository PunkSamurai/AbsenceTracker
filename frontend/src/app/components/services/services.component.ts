import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/Service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  
  services?: Service[];
  selectedOption:string="Voir les taches";
  
  constructor(private serviceService : ServiceService,private router :Router) {
   
 }

  private getService(){
    this.serviceService.getServices().subscribe(items =>{
      console.log("iteeems",items);
      this.services = items;
    })
    
  }
  ngOnInit(): void {
    this.getService();
  }




  updateTache(id:any){
    console.log(this.selectedOption+" "+id);
    this.router.navigate(['update-tache', id]);
    //this.router.navigate(['update-Service', id]);
  }

}




  


