import { Injectable } from '@angular/core';
import {PersonajesModel } from "../models/personajes"
import { Observable, Observer } from "rxjs";
import { PersonajeServiceInterface } from './personaje.service.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class PersonajeServiceBack extends PersonajeServiceInterface {
  

  constructor(private http:HttpClient){
    super();
  }

  get(id: number): Observable<PersonajesModel> {
    return this.http.get<PersonajesModel>("http://localhost:3000/personajes/"+ id)
  }
  update(personaje: PersonajesModel): Observable<any> {
    return this.http.put("http://localhost:3000/personajes/"+personaje.id,personaje); 
  }

  add(personaje: PersonajesModel): Observable<any> {
    return this.http.post("http://localhost:3000/personajes",personaje);
  }
 
  delete(id:number): Observable <any>{
    return this.http.delete<PersonajesModel[]>("http://localhost:3000/personajes/" + id)
  }
  
  getAll():Observable<PersonajesModel[]>{
    return this.http.get<PersonajesModel[]>("http://localhost:3000/personajes")
  }
  
}

