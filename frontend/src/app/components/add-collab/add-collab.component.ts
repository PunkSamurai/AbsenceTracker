import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collab } from 'src/app/Collabs';
import { CollabsService } from 'src/app/services/collabs.service';

@Component({
  selector: 'app-add-collab',
  templateUrl: './add-collab.component.html',
  styleUrls: ['./add-collab.component.css']
})
export class AddCollabComponent implements OnInit {
  collab: Collab = new Collab();
  alert: boolean= false;
  constructor(private collabService: CollabsService,private router: Router) { }

  ngOnInit(): void {
  }
  saveCollab() {
    this.collabService.addCollab(this.collab).subscribe(
      (data) =>  console.log(data));
      this.goToCollabList(); 
  }

  goToCollabList(){
    this.router.navigate(['/collabs']);
  }
  
  onSubmit(){
    console.log(this.collab);
    this.saveCollab();
    this.alert=true;
  }
  closeAlert(){
    this.alert=true;
  }


}
