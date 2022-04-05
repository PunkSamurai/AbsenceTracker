import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollabsComponent } from './components/collabs/collabs.component';

const routes: Routes = [
  {
    path: '',
    component: CollabsComponent
}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
