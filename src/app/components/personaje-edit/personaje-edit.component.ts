import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesModel } from 'src/app/models/personajes';
import { PersonajeServiceInterface } from 'src/app/services/personaje.service.interface';

@Component({
  selector: 'app-personaje-edit',
  templateUrl: '../personaje-add/personaje-add.component.html',
  styleUrls: ['./personaje-edit.component.css']
})

export class PersonajeEditComponent implements OnInit {

  form : FormGroup;
  personaje: PersonajesModel;

  constructor(private fb:FormBuilder, 
              private service: PersonajeServiceInterface, 
              private router:Router,
              private activatedRoute: ActivatedRoute) {
    
              this.form = this.fb.group({
              superhero:['', Validators.required], 
              publisher:['', Validators.required], 
              alter_ego:['', Validators.required],
              age: [0, Validators.required]
    })
   }

  submitForm(){
    this.personaje = {...this.personaje, ...this.form.value};
    this.service.update(this.personaje).subscribe(()=>{
      this.router.navigate(["personaje"]);
    })
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params["id"];

      this.service.get(id).subscribe((data:PersonajesModel)=>{
        this.personaje = data;
        this.form.patchValue(this.personaje);
      })      
    })
  }

 
}
