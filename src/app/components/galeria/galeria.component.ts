import { Component } from '@angular/core';
import { IntegrantesService } from 'src/app/services/data.service';
interface Foto {
  imageUrl: string;
  caption: string;
}
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  heading: string = 'Galería';
  galeria: any[] = [];

  constructor( private integrantesService: IntegrantesService) {}

  ngOnInit(): void {
    this.obtenerGaleria();
  }

  obtenerGaleria() {
    this.integrantesService.obtenerGaleria().subscribe(
      (data) => {
        this.galeria = data;

      },
      (error) => {
        console.error('Error al obtener integrantes', error);
      }
    );
  }
}
