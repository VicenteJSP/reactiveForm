import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  @Output() dataForm: EventEmitter<any> = new EventEmitter<any>(); 
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
    this.dataForm.emit(formulario.value);
  }

  ngOnInit() {
  }

}
