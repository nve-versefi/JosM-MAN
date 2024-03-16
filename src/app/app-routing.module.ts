import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { OrquestaComponent } from './components/orquesta/orquesta.component';
import { ConciertosComponent } from './components/conciertos/conciertos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { ConvocatoriaComponent } from './components/pruebas/convocatoria/convocatoria.component';
import { FormularioComponent } from './components/pruebas/formulario/formulario.component';
import { DirectivaComponent } from './components/orquesta/directiva/directiva.component';
import { FuncionamientoComponent } from './components/orquesta/funcionamiento/funcionamiento.component';
import { MusicosComponent } from './components/orquesta/musicos/musicos.component';
import { TemporadaComponent } from './components/orquesta/temporada/temporada.component';
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
import { ParticularesComponent } from './components/apoyanos/particulares/particulares.component';
import { FormEventosComponent } from './components/form-eventos/form-eventos.component';
import { DesarrolloComponent } from './components/desarrollo/desarrollo.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'orquesta', component: OrquestaComponent },
  { path: 'conciertos', component: ConciertosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'pruebas', component: PruebasComponent },
  { path: 'convocatoria', component: ConvocatoriaComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'directiva', component: DirectivaComponent },
  { path: 'funcionamiento', component: FuncionamientoComponent },
  { path: 'musicos', component: MusicosComponent },
  { path: 'temporada', component: TemporadaComponent },
  { path: 'colaboradores', component: ColaboradoresComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'logros', component: LogrosComponent },
  { path: 'prensa', component: PrensaComponent },
  { path: 'apoyanos', component: ApoyanosComponent, 
    children: [
      { path: 'empresas', component: EmpresasComponent },
      { path: 'particulares', component: ParticularesComponent },

    ]
},
  { path: 'instituciones', component: InstitucionesComponent },
  { path: 'programacion', component: ProgramacionComponent },
  { path: 'temporada', component: TemporadaComponent },
  { path: 'anteriores', component: AnterioresComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'apoyo', component: ApoyoComponent },
  { path: 'admision', component: AdmisionComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'rs', component: RSComponent },
  { path: 'addEvento', component: FormEventosComponent },
  { path: 'desarrollo', component: DesarrolloComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }