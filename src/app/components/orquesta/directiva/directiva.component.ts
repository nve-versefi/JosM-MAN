import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupBioComponent } from '../../popup-bio/popup-bio.component';
import { IntegrantesService } from 'src/app/services/data.service';
import { OnInit } from '@angular/core';

interface RedSocial {
  icono: string;
  enlace: string;
}

interface Persona {
  nombre: string;
  titulo: string;
  descripcion: string;
  imagen: string; // Nueva propiedad para la imagen
  redesSociales: RedSocial[];
}

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent {
  heading: string = 'Equipo';
  directiva: any[] = [];



  socialMediaIcons = [
    { iconClass: 'fa fa-instagram', property: 'instagram' },
    { iconClass: 'fa fa-facebook', property: 'facebook' },
    { iconClass: 'fa fa-youtube', property: 'youtube' }
  ];
  
  constructor(private dialog: MatDialog, private integrantesService: IntegrantesService) {}

  ngOnInit(): void {
    this.obtenerDirectiva();
  }

  obtenerDirectiva() {
    this.integrantesService.obtenerDirectiva().subscribe(
      (data) => {
        this.directiva = data;

      },
      (error) => {
        console.error('Error al obtener integrantes', error);
      }
    );
  }



  openPopup(directiva: Persona): void {


    const dialogRef = this.dialog.open(PopupBioComponent, {
      width: '80%',
      height: '80%',
      data: { persona: directiva }, // Pasa la persona al componente de popup
      panelClass: 'custom-popup',
      backdropClass: 'dark-overlay',
    });
  }


}
