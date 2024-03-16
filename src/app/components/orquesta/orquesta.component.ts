import { Component } from '@angular/core';

@Component({
  selector: 'app-orquesta',
  templateUrl: './orquesta.component.html',
  styleUrls: ['./orquesta.component.scss']
})
export class OrquestaComponent {
  imageUrls: string[] = [
    '../../../../assets/img/orquesta6.jpeg',
    '../../../../assets/img/partitura.jpg',
    '../../../../assets/img/flauta.JPG',
    '../../../../assets/img/flauta.JPG',
    '../../../../assets/img/flauta.JPG',
    '../../../../assets/img/flauta.JPG'
  ];

  credits: string[] = [
    'Tim Marshall',
    'Christian Joudrey',
    'Steve Carter',
    'Aleksandra Boguslawska',
    'Rosan Harmens',
    'Annie Spratt'
  ];

  texts: string[] = [
    'Texto1',
    'Texto2',
    'Texto3',
    'Texto4',
    'Texto5',
    'Texto6',
  ];
}
