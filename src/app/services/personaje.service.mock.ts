import { Injectable } from '@angular/core';
import { PersonajesModel } from "../models/personajes"
import { PersonajeServiceInterface } from "./personaje.service.interface"
import { Observable, Observer } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class PersonajeServiceMock extends PersonajeServiceInterface {
  get(id: number): Observable<PersonajesModel> {
    return Observable.create((obs:Observer<any>) => {
      obs.next(null);
      obs.complete();
    })
  }
  update(personaje: PersonajesModel): Observable<any> {
    return Observable.create((obs:Observer<any>) => {
      obs.next(null);
      obs.complete();
    })
  }
  
  add(personaje: PersonajesModel): Observable<any> {
    return Observable.create((obs:Observer<any>) => {
      obs.next(null);
      obs.complete();
    })
  }
  
  delete(id:number): Observable <any>{
    return Observable.create((obs:Observer<any>) => {
      obs.next(null);
      obs.complete();
    })
  }

  getAll():Observable<PersonajesModel[]>{
    return Observable.create(
      (obs:Observer<PersonajesModel[]>) => {
      obs.next([
        {
          "id": 11,
          "superhero":"Thor", 
          "publisher":"Marvel Comics", 
          "alter_ego":"Thor Odinson",
          "age": 170
        },
      {
          "id": 12,
          "superhero":"Hulk", 
          "publisher":"Marvel Comics", 
          "alter_ego":"Bruce Banner",
          "age": 36
        },
      {
          "id": 13,
          "superhero":"Wolverine", 
          "publisher":"Marvel Comics", 
          "alter_ego":"James Howlett",
          "age": 47
        },
      {
          "id": 14,
          "superhero":"Daredevil", 
          "publisher":"Marvel Comics", 
          "alter_ego":"Matthew Michael Murdock",
          "age": 36
        }
      ]);
      obs.complete();
    });
  }

  
}
