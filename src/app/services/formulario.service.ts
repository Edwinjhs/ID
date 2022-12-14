import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor() { }
  public loadScript() {
    let iniciarjoven = document.createElement('script');
    iniciarjoven.src = 'assets/javascript/main.js';
    iniciarjoven.type = 'text/javascript';
    iniciarjoven.async = true;
    document.getElementsByTagName('head')[0].appendChild(iniciarjoven);
  }

}
