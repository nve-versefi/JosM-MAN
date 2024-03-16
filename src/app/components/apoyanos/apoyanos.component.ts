import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-apoyanos',
  templateUrl: './apoyanos.component.html',
  styleUrls: ['./apoyanos.component.scss'],
  animations: [
    trigger('buttonAnimation', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('200ms ease-in')),
      transition('active => inactive', animate('200ms ease-out'))
    ])
  ]
})
export class ApoyanosComponent implements OnInit  {
heading: string = '¡Apoyanos!';
currentRoute: string = '';
botonEmpresas: string = 'Empresas';
botonParticulares: string = 'Particulares'

ngOnInit() {
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.currentRoute = event.urlAfterRedirects;
    }
  });
}

constructor(private router: Router){}

navToEmpresas() {

    this.router.navigate(['/apoyanos/empresas']);

}

navToParticulares() {

  this.router.navigate(['/apoyanos/particulares']);

}



  cards = [
    { text: 'Nuestro objetivo es promocionar la música clásica y sinfónica,entregando una experiencia única que deje huella en quien nosescuche.  Así,  nuestros  jóvenes  artistas  de  alto  nivel  ofrecen  alpúblico repertorio de alta calidad y excelencia, desarrollan sumáximo  potencial,  y  ponen  en  valor  la  importancia  de  lamúsica en nuestro día a día. ' },
    { text: 'Más de 8000 personas - solo en nuestro primer año - ya hanpodido ser testigos del fenómeno que hemos provocado enlos  pueblos  de  la  sierra  madrileña  a  través  de  numerososconciertos. Si deseas unirte a la JOsM, ya sea desde una institución, unaempresa o un particular, tenemos ya una propuesta para ti.A  continuación,  encontrarás  distintas  posibilidades  que  teofrecemos para aportar y hacerte parte de nuestra historia.' },
    { text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }
  ];

}
