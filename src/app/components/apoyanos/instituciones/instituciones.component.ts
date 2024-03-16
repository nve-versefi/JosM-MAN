import { Component } from '@angular/core';

interface Slide {
  imageUrl: string;
  link: string;
  id: number;
}


@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.scss']
})
export class InstitucionesComponent {
      heading: string = 'Instituciones';

      slidesCol: Slide[] = [
        { imageUrl: '../../../assets/img/villalba.png',
         link: '/inicio' ,
        id: 1},
         { imageUrl: '../../../assets/img/logo-alpedrete.png',
         link: '/conciertos' , id: 2},
         { imageUrl: '../../../assets/img/becerril.png',
         link: '/conciertos', id: 3 },
         { imageUrl: '../../../assets/img/Boalo-Cerceda-Mataelpino.png',
         link: '/conciertos' , id: 4},
         { imageUrl: '../../../assets/img/Cercedilla.png',
         link: '/conciertos' , id: 5},
         { imageUrl: '../../../assets/img/Navacerrada.webp',
         link: '/conciertos', id: 6 },
         { imageUrl: '../../../assets/img/Las Rozas.png',
         link: '/conciertos' , id: 7},
         { imageUrl: '../../../assets/img/Moralzarzal.png',
         link: '/conciertos' , id: 8},
    
    
        // Agrega más objetos Slide según sea necesario
      ];
  slides: Slide[] = [
    { imageUrl: '../../../assets/img/logo-hoyo-naranja-300.png',
     link: '/inicio' , id: 9},
     { imageUrl: '../../../assets/img/colmenarV.png',
     link: '/inicio' , id: 10},
     { imageUrl: '../../../assets/img/escudo-manzanares-el-real.png',
     link: '/inicio' , id: 11},
     { imageUrl: '../../../assets/img/trescantos.png',
     link: '/inicio' , id: 12},
     { imageUrl: '../../../assets/img/guadarrama.png',
     link: '/inicio' , id: 13 },
     { imageUrl: '../../../assets/img/soto.png',
     link: '/inicio' , id: 14},
     { imageUrl: '../../../assets/img/miraflores.png',
     link: '/inicio' , id: 15},
     { imageUrl: '../../../assets/img/El Escorial.png',
     link: '/conciertos' , id: 16},

    // Agrega más objetos Slide según sea necesario
  ];


  slidesOtros: Slide[] = [
    { imageUrl: '../../../assets/img/dras.jpg',
     link: '/inicio', id: 17 },
     { imageUrl: '../../../assets/img/mosso.png',
     link: '/inicio' , id: 18},


    // Agrega más objetos Slide según sea necesario
  ];

  

  constructor() {
    // Puedes ajustar la cantidad de slides que deseas mostrar
    const numberOfSlides = 4;

    // Repetir el bucle para añadir slides adicionales
    for (let i = 0; i < numberOfSlides; i++) {
      this.slidesCol.push(...this.slidesCol);
      this.slides.push(...this.slides);

    }
  }
}
