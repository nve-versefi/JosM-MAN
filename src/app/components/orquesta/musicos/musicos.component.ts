import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PopupBioComponent } from '../../popup-bio/popup-bio.component';
import { IntegrantesService } from 'src/app/services/data.service';
import { OnInit } from '@angular/core';

interface Instrumento {
  nombre: string;
  imagen: string; // Nueva propiedad para la imagen
}
@Component({
  selector: 'app-musicos',
  templateUrl: './musicos.component.html',
  styleUrls: ['./musicos.component.scss'],
})
export class MusicosComponent implements OnInit {
  heading: string = 'Musicos';
  integrantes: any[] = [];



  

  instrumentos: Instrumento[] = [
    {
      nombre: 'Violín',
      imagen: '../../../assets/img/violin.webp', // Ruta de la imagen

    },
    {
      nombre: 'Viola',
      imagen: '../../../assets/img/viola.jpg', // Ruta de la imagen
  
    },
    {
      nombre: 'Violonchelo',
      imagen: '../../../assets/img/instr/cello.jpg', // Ruta de la imagen
 
    },
    {
      nombre: 'Contrabajo',
      imagen: '../../../assets/img/instr/cello.jpg', // Ruta de la imagen

    },
    {
      nombre: 'Flauta',
      imagen: '../../../assets/img/flauta.jpg', // Ruta de la imagen

    },
    {
      nombre: 'Oboe',
      imagen: '../../../assets/img/instr/oboe.jpg', // Ruta de la imagen

    },
    {
      nombre: 'Clarinete',
      imagen: '../../../assets/img/instr/clarinete.jpg', // Ruta de la imagen
  
    },
    {
      nombre: 'Clarinete Bajo',
      imagen: '../../../assets/img/instr/clabajo.jpg', // Ruta de la imagen
  
    },
    {
      nombre: 'Fagot',
      imagen: '../../../assets/img/fag.jpg', // Ruta de la imagen
  
    },
    {
      nombre: 'Trompa (trompa grave)',
      imagen: '../../../assets/img/instr/trompa.jpg', // Ruta de la imagen
  
    },
    {
      nombre: 'Trompeta',
      imagen: '../../../assets/img/instr/trompeta.jpeg', // Ruta de la imagen
  
    },
    {
      nombre: 'Trombón',
      imagen: '../../../assets/img/trombon.jpg', // Ruta de la imagen
  
    },
    {
      nombre: 'Tuba',
      imagen: '../../../assets/img/tuba.jpg', // Ruta de la imagen
  
    },
    {
      nombre: 'Percusión',
      imagen: '../../../assets/img/instr/percu.jpg', // Ruta de la imagen
  
    },
    {
      nombre: 'Piano',
      imagen: '../../../assets/img/instr/piano.jpg', // Ruta de la imagen
  
    },




  ];

  ngOnInit(): void {
    this.obtenerIntegrantes();
  }

  constructor(private dialog: MatDialog, private integrantesService: IntegrantesService) {}

  obtenerIntegrantes() {
    this.integrantesService.obtenerMusicos().subscribe(
      (data) => {
        this.integrantes = data;

      },
      (error) => {
        console.error('Error al obtener integrantes', error);
      }
    );
  }

  printNombres(instrumento: string): string[] {
    const nombres: string[] = [];
    for (let integrante of this.integrantes) {
      if (integrante.instrumento == instrumento) {
        nombres.push(integrante);
      }
    }
    return nombres;
  }



  openPopup(instrumento: Instrumento): void {
    const musicos = this.printNombres(instrumento.nombre);
  
    const dialogRef = this.dialog.open(PopupBioComponent, {
      width: '80%',
      height: '80%',
      data: { instrumentos: instrumento, musicos: musicos }, // Pasa la persona al componente de popup
      panelClass: 'custom-popup',
      backdropClass: 'dark-overlay',
    });
  }



}
