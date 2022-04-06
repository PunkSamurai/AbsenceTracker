import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCollabComponent } from './components/add-collab/add-collab.component';
import { CollabsComponent } from './components/collabs/collabs.component';

import { ServicesComponent } from './components/services/services.component';
import { UpdateCollabComponent } from './components/update-collab/update-collab.component';
import { UpdateTacheComponent } from './components/update-tache/update-tache.component';

const routes: Routes = [
  {path: 'collabs', component: CollabsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'add-collab', component: AddCollabComponent},
  {path: '', redirectTo: 'collabs', pathMatch: 'full'},
  {path: 'update-collab/:id', component: UpdateCollabComponent},
  {path: 'update-tache/:id', component: UpdateTacheComponent},
 

 /* {path: 'employee-details/:id', component: EmployeeDetailsComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
