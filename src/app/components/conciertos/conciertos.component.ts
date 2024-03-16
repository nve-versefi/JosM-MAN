import { Component } from '@angular/core';

@Component({
  selector: 'app-conciertos',
  templateUrl: './conciertos.component.html',
  styleUrls: ['./conciertos.component.scss']
})
export class ConciertosComponent {
  articles = [
    {
      color: 'orange',
      imgSrc: '../../../../assets/img/orquesta6.jpeg', // Agrega la URL de la imagen
      title: 'Podcast Title',
      date: 'Mon, May 25th 2020',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      tag: 'Podcast',
      duration: '55 mins.',
    },
    {
      color: 'orange',
      imgSrc: 'https://picsum.photos/501/500', // Agrega la URL de la imagen
      title: 'Podcast Title',
      date: 'Mon, May 25th 2020',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      tag: 'Podcast',
      duration: '55 mins.',
    },
    {
      color: 'orange',
      imgSrc: 'https://picsum.photos/500/501', // Agrega la URL de la imagen
      title: 'Podcast Title',
      date: 'Mon, May 25th 2020',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      tag: 'Podcast',
      duration: '55 mins.',
    },
    {
      color: 'orange',
      imgSrc: 'https://picsum.photos/501/501', // Agrega la URL de la imagen
      title: 'Podcast Title',
      date: 'Mon, May 25th 2020',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      tag: 'Podcast',
      duration: '55 mins.',
    },
    {
      color: 'orange',
      imgSrc: '../../../../assets/img/blanco.png', // Agrega la URL de la imagen
      title: 'Podcast Title',
      date: 'Mon, May 25th 2020',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      tag: 'Podcast',
      duration: '55 mins.',
    },
    {
      color: 'orange',
      imgSrc: '../../../../assets/img/blanco.png', // Agrega la URL de la imagen
      title: 'Podcast adfsioadfsnindfsi',
      date: 'Mon, May 25th 2020',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
      tag: 'Podcast',
      duration: '55 mins.',
    },
    // Puedes seguir agregando más objetos para más artículos con diferentes imágenes
  ];
}
