import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCollabComponent } from './components/add-collab/add-collab.component';
import { CollabsComponent } from './components/collabs/collabs.component';
import { ServicesComponent } from './components/services/services.component';
import { UpdateCollabComponent } from './components/update-collab/update-collab.component';
import { UpdateTacheComponent } from './components/update-tache/update-tache.component';
import { AddTacheComponent } from './components/add-tache/add-tache.component';
import { AddTacheToServiceComponent } from './components/add-tache-to-service/add-tache-to-service.component';


@NgModule({
  declarations: [
    AppComponent,
    CollabsComponent,
    ServicesComponent,
    AddCollabComponent,
    UpdateCollabComponent,
    UpdateTacheComponent,
    AddTacheComponent,
    AddTacheToServiceComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
