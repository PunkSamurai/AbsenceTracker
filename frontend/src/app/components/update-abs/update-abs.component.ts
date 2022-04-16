import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Abs } from 'src/app/Absence';
import { AbsService } from 'src/app/services/abs.service';

@Component({
  selector: 'app-update-abs',
  templateUrl: './update-abs.component.html',
  styleUrls: ['./update-abs.component.css']
})
export class UpdateAbsComponent implements OnInit {

  id!: number;
  abs : Abs = new Abs();
  constructor(private absService: AbsService, private route: ActivatedRoute,
    private router: Router) { }

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
  
  onSubmit(){
    /*this.absService.(this.matr, this.collab).subscribe((data)=> console.log(data))
    console.log("request body",this.collab) */
    this.goToAbsList();
    }


}
