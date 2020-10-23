import { PersonajesModel } from '../../models/personajes';
import { Component, OnInit } from '@angular/core';
import { PersonajeServiceInterface } from 'src/app/services/personaje.service.interface';

@Component({
  selector: 'app-personaje-list',
  templateUrl: './personaje-list.component.html',
  styleUrls: ['./personaje-list.component.css'],
})
export class PersonajeListComponent implements OnInit {
  personajes: PersonajesModel[];

  constructor(private service: PersonajeServiceInterface) {}

  eliminar(id: number) {
    if (confirm('Deseas Eliminar el item: ' + id + '?')) {
      this.service.delete(id).subscribe(() => {
        this.mostrarTabla();
      });
    }
  }

  mostrarTabla() {
    this.service.getAll().subscribe((data: PersonajesModel[]) => {
      this.personajes = data;
    });
  }

  ngOnInit(): void {
    this.mostrarTabla();
  }
}
