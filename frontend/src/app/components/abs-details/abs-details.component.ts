import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog'
import { Abs } from 'src/app/Absence';

@Component({
  selector: 'app-abs-details',
  templateUrl: './abs-details.component.html',
  styleUrls: ['./abs-details.component.css']
})
export class AbsDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:Abs[],private matDialogRef:MatDialogRef<AbsDetailsComponent> ) { }

  ngOnInit(): void {
    console.log("data in popup",this.data);
  }
  ngOnDestroy(){
    this.matDialogRef.close(this.data)
  }
  onClose(){
    this.matDialogRef.close()
  }


}
