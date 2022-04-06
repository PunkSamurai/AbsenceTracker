import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/Service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.css']
})
export class UpdateTacheComponent implements OnInit {

  id!: number;
  service : Service = new Service();
  constructor(private serviceService:ServiceService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("idservice" , this.id)
    this.serviceService.getServiceById(this.id).subscribe(data =>{
    this.service = data;
    console.log("collab" ,this.service)
  })


}
}