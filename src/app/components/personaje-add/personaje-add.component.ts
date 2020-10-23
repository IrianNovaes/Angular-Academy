import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { PersonajesModel } from 'src/app/models/personajes';
import { PersonajeServiceInterface } from 'src/app/services/personaje.service.interface';

@Component({
  selector: 'app-personaje-add',
  templateUrl: './personaje-add.component.html',
  styleUrls: ['./personaje-add.component.css']
})

export class PersonajeAddComponent implements OnInit {

  form : FormGroup;
  
  constructor(private fb:FormBuilder, 
              private service: PersonajeServiceInterface, 
              private router:Router) {
    
              this.form = this.fb.group({
              superhero:['', Validators.required], 
              publisher:['', Validators.required], 
              alter_ego:['', Validators.required],
              age: [0, Validators.required]
    })
   }

  ngOnInit(): void {
  }
  submitForm(){
    // let personaje:PersonajesModel = new PersonajesModel(
    //   this.form.get("superhero").value,
    //   this.form.get("publisher").value,
    //   this.form.get("alter_ego").value,
    //   this.form.get("age").value
    //   );

    let personaje:PersonajesModel = this.form.value;

    this.service.add(personaje).subscribe(()=> {
      this.router.navigate(["/personaje"])
    })
    console.dir(this.form.value)
  }
}
