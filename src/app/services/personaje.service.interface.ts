import { Injectable } from '@angular/core';
import { PersonajesModel } from "../models/personajes"
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export abstract class PersonajeServiceInterface {

  constructor() { }

  abstract getAll():Observable<PersonajesModel[]>;
  abstract add(personaje: PersonajesModel): Observable <any>;
  abstract delete(id:number): Observable <any>;
  abstract get(id:number):Observable<PersonajesModel>;
  abstract update(personaje: PersonajesModel):Observable<any>;

}
