import { Component } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  cardsData: Array<{ id: string, title: string, description: string, imagePath: string }> = [
    {
      id: 'horizontal-background-1',
      title: '¿Quienes somos?',
      description: ' Desde su fundación en abril de 2022 la joven orquesta sierra de Madrid ha permitido a cientos de jóvenes instrumentistas desarrollar y completar su formación musical. Participando en espectáculos camerísticos y conciertos sinfónicos bajo el magisterio de maestros como: Javier Hermosa Sánchez, Enrique García Asensio, David Mata, Salvador Barberá, German Asensi, Raul Benavent, Josep Trescolí, Enrique Rioja, Fabiola Saglimbeni, Mónica Raga, Claudia Padrino, Yonan Daniel Martins y Alfonsina Torrealba; y acompañando a grandes solistas como Matteo Giuliani, Francisco Fierro y Rodrigo Leitte.  ',
      imagePath: "../../../../assets/img/orquesta2.jpg"
    },
    {
      id: 'horizontal-background-2',
      title: 'Vision',
      description: 'Trabajamos como entidad para atraer el talento joven a la comarca y apostar por una educación cultural y artística, que suponga una alternativa completa para construir mejores valores en la personalidad y carrera de estos jóvenes músicos. Lo hacemos con la necesidad de estructurar una orquesta de futuro con la que realizar actividades de desarrollo del entorno no solo a nivel cultural; y de la que sentirse orgulloso a nivel de representación institucional, convirtiéndonos en un proyecto de referencia humano, social, económico y cultural dentro del marco nacional y europeo.',
      imagePath: "../../../../assets/img/orquestaq.jpeg"
    },
    {
      id: 'horizontal-background-3',
      title: 'Mision',
      description: 'Nuestro objetivo es desarrollar y potenciar las carreras de los jóvenes músicos. Dicha oportunidad se centrará en ofrecer una formación en el ámbito del mundo orquestal sinfónico para ayudar a adquirir experiencia en la profesionalización musical del terreno interpretativo a los más jóvenes y ayudarles a crear una red de contactos que nutran su formación musical y personal, proponiendo actividades que ayuden a completar su formación musical de manera muy especializada.',
      imagePath: "../../../../assets/img/h1.jpeg"
    },
    {
      id: 'horizontal-background-4',
      title: 'Valores',
      description: ' Apoyaremos las carreras de los jóvenes músicos con un aporte económico, educativo, social y humano que les ayude a tener seguridad del increíble valor que como personas y artistas aportan a este mundo, y de lo realmente necesarios y beneficiosos que resultan a la sociedad. Queremos demostrar al gran público y a la sociedad en su conjunto que la cultura es útil, necesaria, productiva, sanadora y aporta riqueza económica y social. Nuestra máxima es tener una organización profesional en nuestra estructura humana y artística a la altura de las grandes orquestas y proyectos europeos.',
      imagePath: "../../../../assets/img/orquesta4.jpg"
    },
    // Agrega más objetos según sea necesario
  ];
}