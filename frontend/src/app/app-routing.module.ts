import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCollabComponent } from './components/add-collab/add-collab.component';
import { CollabsComponent } from './components/collabs/collabs.component';
import { UpdateCollabComponent } from './components/update-collab/update-collab.component';

const routes: Routes = [
  {path: 'collabs', component: CollabsComponent},
  {path: 'add-collab', component: AddCollabComponent},
  {path: '', redirectTo: 'collabs', pathMatch: 'full'},
  {path: 'update-collab/:id', component: UpdateCollabComponent},
 /* {path: 'employee-details/:id', component: EmployeeDetailsComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
