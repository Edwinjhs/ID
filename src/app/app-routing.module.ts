import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { HOMEComponent } from './components/home/home.component';
import { IniarjovenComponent } from './components/iniarjoven/iniarjoven.component';
import { IniciarempresaComponent } from './components/iniciarempresa/iniciarempresa.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { PostulantesComponent } from './components/postulantes/postulantes.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: 'full'},
  {path: 'home', component:HOMEComponent},
  {path: 'iniciarjoven', component:IniarjovenComponent},
  {path: 'ofertas', component:OfertasComponent},
  {path: 'iniciarempresa', component:IniciarempresaComponent},
  {path: 'contactanos', component:ContactanosComponent},
  {path: 'postulantes', component:PostulantesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
