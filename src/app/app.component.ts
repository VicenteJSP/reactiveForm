import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Formulario Reactivo';
  formulario: FormGroup;

  constructor( private formBilder: FormBuilder) {
    this.formulario = this.formBilder.group({
      nombre:[null, Validators.required],
      email:[null, Validators.compose([Validators.email, Validators.required])],
      pwd:[null, Validators.compose([Validators.minLength(4), Validators.required])]
    });
  }

  enviar(formulario: FormGroup){
    console.log('Leyendo datos');
    console.log(formulario.value);
  }

}
