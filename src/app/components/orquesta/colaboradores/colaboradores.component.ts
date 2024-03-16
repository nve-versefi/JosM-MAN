import { Component } from '@angular/core';


interface Slide {
  imageUrl: string;
  link: string;
}



@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent {
  heading: string = '!Apoyanos¡';

  slides: Slide[] = [
    { imageUrl: 'https://static.wixstatic.com/media/fbd1e1_38fd63a69d674d40929927d7d774f420~mv2.jpg/v1/fill/w_299,h_90,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Logo%20Collado%20Villalba-Color.jpg',
     link: '/inicio' },
    { imageUrl: 'https://static.wixstatic.com/media/fbd1e1_d72b8e3d3e434f57b703d11a8d9da52c~mv2.png/v1/fill/w_489,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/aytohome_PNG.png',
     link: '/conciertos' },
     { imageUrl: 'https://static.wixstatic.com/media/fbd1e1_451578dce86546f492aa4ba17251c9ce~mv2.jpeg/v1/fill/w_315,h_163,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Logo-ayto-negat-dcha-rojo-1170x605_JPEG.jpeg',
     link: '/conciertos' },
     { imageUrl: 'https://static.wixstatic.com/media/fbd1e1_3db4fb9a4efa4f85932de14b0f333e4f~mv2.png/v1/fill/w_115,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NewEscudoTransparente.png',
     link: '/conciertos' },
     { imageUrl: 'https://static.wixstatic.com/media/fbd1e1_3808281f41bf46ed843eba338320059c~mv2.png/v1/crop/x_0,y_0,w_1842,h_1823/fill/w_105,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ALPEDRETE.png',
     link: '/conciertos' },
     { imageUrl: 'https://static.wixstatic.com/media/fbd1e1_16f37195b1ea427f910a2586648d0784~mv2.png/v1/fill/w_101,h_119,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOS%20MOLINOS%20(1).png',
     link: '/conciertos' },
     { imageUrl: 'https://static.wixstatic.com/media/fbd1e1_04b49a1b40e941648123819cb7131f8c~mv2.png/v1/fill/w_245,h_182,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/escudo%20ayto%20vectorizado.png',
     link: '/conciertos' },


    // Agrega más objetos Slide según sea necesario
  ];
  constructor() {
    // Puedes ajustar la cantidad de slides que deseas mostrar
    const numberOfSlides = 10;

    // Repetir el bucle para añadir slides adicionales
    for (let i = 0; i < numberOfSlides; i++) {
      this.slides.push(...this.slides);
    }
  }
}
