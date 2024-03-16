import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupBioComponent } from '../../popup-bio/popup-bio.component';
import { HttpClient } from '@angular/common/http';
import { IntegrantesService } from 'src/app/services/data.service';

interface Texto {
  parrafo: string;
  titulo: string;
  contenido: string;
}

@Component({
  selector: 'app-funcionamiento',
  templateUrl: './funcionamiento.component.html',
  styleUrls: ['./funcionamiento.component.scss']
})
export class FuncionamientoComponent{
  heading: string = 'La JOsM desde dentro';
  info: any[] = [];

  constructor(private dialog: MatDialog, private http: HttpClient,  private integrantesService: IntegrantesService) {}


  ngOnInit(): void {
    this.obtenerInfo();
  }


  obtenerInfo() {
    this.integrantesService.obtenerInfo().subscribe(
      (data) => {
        this.info = data;

      },
      (error) => {
        console.error('Error al obtener integrantes', error);
      }
    );
  }

  openPopup(item: Texto): void {
    const dialogRef = this.dialog.open(PopupBioComponent, {
      width: '70%',
      height: '70%',
      data:  {item} ,
      panelClass: 'custom-popup',
      backdropClass: 'dark-overlay',

      
    });
  }
}
