import { Component } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent {
  heading: string = 'Empresas';

  ranks = [
    { name: 'Desde', color: '#012f46', price: '300' },
    { name: 'Desde', color: '#ad8a1f', price: '1500' },
    { name: 'Desde', color: '#808080', price: '5000' },
    { name: 'Desde', color: '#efb810', price: '10000' }
  ];

  benefits = [
    'Aperece en su logo en todas las publicaciones de RRSS',
    'Detalle JOsM',
    'Aparece su logo en el Slide Principal de RRSS Y EN LA LANA DE LA PORTADA',
    'Aparece Logo en programas de mano y al final de los videos promocionales de la JOsM',
    'Creacion de acuerdos comerciales',
    'Reserva de locaclizaciones a disposicion de la empresa oara la temporada',
    'Aparece Logo dentro de patrocinadores destacados, en roll-ups y entradas',
    'Acceso a utilizacion del material sonoro JOsM para sus eventos o spots publicitarios ["30"]',
    'Video exclusivo para empresa. Publireportaje, Publicidad',
    'Aparece como Patrocinador principal'
  ];

  rankBenefits = [
    { rank: 'Plus', benefits: [true, true, false, false, false, false, false, false, false, false] },
    { rank: 'Bronce', benefits: [true, true, true, true, true, true, false, false, false, false] },
    { rank: 'Plata', benefits: [true, true, true, true, true, true, true, true, false, false] },
    { rank: 'Oro', benefits: [true, true, true, true, true, true, true, true, true, true] }
  ];
}
