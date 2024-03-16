import { Component } from '@angular/core';
import { IntegrantesService } from 'src/app/services/data.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {
heading: string = "Eventos";
constructor( private integrantesService: IntegrantesService) {}
eventos: any[] = [];


ngOnInit(): void {
  this.obtenerEventos();
}

obtenerEventos() {
  this.integrantesService.obtenerEventos().subscribe(
    (data) => {
      this.eventos = data;

    },
    (error) => {
      console.error('Error al obtener integrantes', error);
    }
  );
}






}
