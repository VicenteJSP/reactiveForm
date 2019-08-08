import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Formulario Reactivo';
  data: any;

  display(info: any) { 
    this.data = info;
  }
}
