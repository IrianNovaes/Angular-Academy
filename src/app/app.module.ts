import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajeListComponent } from './components/personaje-list/personaje-list.component';
import { PersonajeServiceInterface } from './services/personaje.service.interface';
import { PersonajeServiceMock } from './services/personaje.service.mock';
import { HttpClientModule } from '@angular/common/http';
import { PersonajeServiceBack } from './services/personaje.service.back';
import { PersonajeEditComponent } from './components/personaje-edit/personaje-edit.component';
import { PersonajeAddComponent } from './components/personaje-add/personaje-add.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './components/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    PersonajeListComponent,
    PersonajeEditComponent,
    PersonajeAddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: PersonajeServiceInterface, 
    //useClass: PersonajeServiceMock
    useClass: PersonajeServiceBack
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
