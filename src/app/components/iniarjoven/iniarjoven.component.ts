import { Component } from '@angular/core';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-iniarjoven',
  templateUrl: './iniarjoven.component.html',
  styleUrls: ['./iniarjoven.component.css']
})
export class IniarjovenComponent {
  constructor(private Formularioservice: FormularioService){
    this.Formularioservice.loadScript();
  }
}
