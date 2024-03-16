import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NavComponent} from './components/nav/nav.component';
import { HeaderComponent } from './components/inicio/header/header.component';
import { CardsComponent } from './components/inicio/cards/cards.component';
import { TargetsComponent } from './components/inicio/targets/targets.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { OrquestaComponent } from './components/orquesta/orquesta.component';
import { ConciertosComponent } from './components/conciertos/conciertos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { ConvocatoriaComponent } from './components/pruebas/convocatoria/convocatoria.component';
import { FormularioComponent } from './components/pruebas/formulario/formulario.component';
import { FuncionamientoComponent } from './components/orquesta/funcionamiento/funcionamiento.component';
import { MusicosComponent } from './components/orquesta/musicos/musicos.component';
import { DirectivaComponent } from './components/orquesta/directiva/directiva.component';
import { TemporadaComponent } from './components/orquesta/temporada/temporada.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColaboradoresComponent } from './components/orquesta/colaboradores/colaboradores.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { EventosComponent } from './components/noticias/eventos/eventos.component';
import { LogrosComponent } from './components/noticias/logros/logros.component';
import { PrensaComponent } from './components/noticias/prensa/prensa.component';
import { ApoyanosComponent } from './components/apoyanos/apoyanos.component';
import { EmpresasComponent } from './components/apoyanos/empresas/empresas.component';
import { InstitucionesComponent } from './components/apoyanos/instituciones/instituciones.component';
import { ProgramacionComponent } from './components/programacion/programacion.component';
import { AnterioresComponent } from './components/programacion/anteriores/anteriores.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ApoyoComponent } from './components/contacto/apoyo/apoyo.component';
import { AdmisionComponent } from './components/contacto/admision/admision.component';
import { ConsultasComponent } from './components/contacto/consultas/consultas.component';
import { RSComponent } from './components/contacto/rs/rs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ParticularesComponent } from './components/apoyanos/particulares/particulares.component';
import { PopupBioComponent } from './components/popup-bio/popup-bio.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { VideosComponent } from './components/galeria/videos/videos.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormEventosComponent } from './components/form-eventos/form-eventos.component';
import { DesarrolloComponent } from './components/desarrollo/desarrollo.component'; // Asegúrate de importar FormsModule

@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    HeaderComponent,
    CardsComponent,
    TargetsComponent,
    FooterComponent,
    InicioComponent,
    OrquestaComponent,
    ConciertosComponent,
    ContactoComponent,
    PruebasComponent,
    ConvocatoriaComponent,
    FormularioComponent,
    ParticularesComponent,
    FuncionamientoComponent,
    MusicosComponent,
    DirectivaComponent,
    TemporadaComponent,
    ColaboradoresComponent,
    NoticiasComponent,
    EventosComponent,
    LogrosComponent,
    PrensaComponent,
    ApoyanosComponent,
    EmpresasComponent,
    InstitucionesComponent,
    ProgramacionComponent,
    AnterioresComponent,
    GaleriaComponent,
    ApoyoComponent,
    AdmisionComponent,
    ConsultasComponent,
    RSComponent,
    PageTitleComponent,
    PopupBioComponent,
    VideosComponent,
    FormEventosComponent,
    DesarrolloComponent,
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatFormFieldModule, 
    MatInputModule,
    MatTableModule,
    MatSortModule,  
    MatDialogModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
