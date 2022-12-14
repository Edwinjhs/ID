import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { AliadosComponent } from './components/aliados/aliados.component';
import { SwiperModule } from 'swiper/angular';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { FooterComponent } from './components/footer/footer.component';
import { HOMEComponent } from './components/home/home.component';
import { IniarjovenComponent } from './components/iniarjoven/iniarjoven.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { IniciarempresaComponent } from './components/iniciarempresa/iniciarempresa.component';
import { PostulantesComponent } from './components/postulantes/postulantes.component';
import { ComparativaComponent } from './components/comparativa/comparativa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AliadosComponent,
    FooterComponent,
    NosotrosComponent,
    HOMEComponent,
    IniarjovenComponent,
    OfertasComponent,
    ContactanosComponent,
    IniciarempresaComponent,
    PostulantesComponent,
    ComparativaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
