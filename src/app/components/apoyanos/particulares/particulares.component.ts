import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-particulares',
  templateUrl: './particulares.component.html',
  styleUrls: ['./particulares.component.scss']
})
export class ParticularesComponent {
  constructor(private router: Router){}

  navToConciertos(){
    this.router.navigate(['/apoyanos/empresas'])
  }
  
  heading: string = 'Particulares';

  ranks = [
    { name: 'Plus', color: '#012f46', price: '50' },
    { name: 'Bronce', color: '#ad8a1f', price: '150' },
    { name: 'Plata', color: '#808080', price: '500' },
    { name: 'Oro', color: '#efb810', price: '1000' }
  ];

  benefits = [
    'Venta anticipada',
    'Reserva de invitaciones',
    'Asistencia a ensayos',
    'Descuento sobre precio de entradas',
    'Regalo/Detalle JOsM',
    'Apadrina a un músico',
    'Regalo de entradas',
    'Posibilidad de organizar eventos con la participación del director, con el músico apadrinado, o negociar directamente eventos musicales'
  ];

  rankBenefits = [
    { rank: 'Plus', benefits: [true, true, true, false, false, false, false, false] },
    { rank: 'Bronce', benefits: [true, true, true, true, true, false, false, false] },
    { rank: 'Plata', benefits: [true, true, true, true, true, true, true, false] },
    { rank: 'Oro', benefits: [true, true, true, true, true, true, true, true, true, true] }
  ];
}
