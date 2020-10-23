import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonajeAddComponent } from './components/personaje-add/personaje-add.component';
import { PersonajeEditComponent } from './components/personaje-edit/personaje-edit.component';
import { PersonajeListComponent } from './components/personaje-list/personaje-list.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"personaje/add",
    component: PersonajeAddComponent
  },
  {
    path:"personaje/edit/:id",
    component: PersonajeEditComponent
  },
  {
    path:"personaje",
    component: PersonajeListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
