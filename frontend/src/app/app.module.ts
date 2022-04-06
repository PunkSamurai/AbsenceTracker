import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollabsComponent } from './components/collabs/collabs.component';
import { AddCollabComponent } from './components/add-collab/add-collab.component';
import { UpdateCollabComponent } from './components/update-collab/update-collab.component';

@NgModule({
  declarations: [
    AppComponent,
    CollabsComponent,
    AddCollabComponent,
    UpdateCollabComponent
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
