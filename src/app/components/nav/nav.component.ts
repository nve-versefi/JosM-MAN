import { Component } from "@angular/core";

@Component({

    selector: 'nav-component',
    templateUrl: './app.nav.html', 
    styleUrls: ['./app.nav.scss']
})

export class NavComponent{

    menuOptions = [
        { id: 'opcion1', label: 'Inicio', link: 'inicio' },
        {
          id: 'opcion2',
          label: 'La orquesta',
          link: 'orquesta',
          subOptions: [
            { label: 'JOsM desde dentro', link: 'funcionamiento' },
            { label: 'Musicos', link: 'musicos' },
            { label: 'Equipo', link: 'directiva' },
            { label: 'Colaboradores', link: 'instituciones' },
          ]
        },

        {
          id: 'opcion3',
          label: 'Noticias',
          link: 'noticias',
          subOptions: [
            { label: 'Eventos', link: 'eventos' },
           // { label: 'Grandes logros', link: 'logros' },
           { label: 'Prensa', link: 'desarrollo' }

          ]
        },
        {
          id: 'opcion4',
          label: 'Programación',
          link: 'programacion',
          subOptions: [
            { label: 'Temporada 2023-2024', link: 'desarrollo' },
            { label: 'Temporadas anteriores', link: 'desarrollo' }
          ]
        },
        {
          id: 'opcion5',
          label: 'Apoyanos',
          link: 'apoyanos',
          subOptions: [
            { label: 'Empresas', link: 'apoyanos/empresas' },
            { label: 'Particulares', link: 'apoyanos/particulares' },
            { label: 'Instituciones', link: 'instituciones' }

          ]
        },
        {
          id: 'opcion6',
          label: 'Contacto',
          link: 'contacto',
         /* subOptions: [
            { label: 'Apoyo', link: 'apoyo' },
            { label: 'Formar parte', link: 'admision' },
            { label: 'Otras consultas', link: 'consultas' },
            { label: 'Redes Sociales', link: 'rs' }


          ]*/
        },
        { id: 'opcion7', label: 'Galería', link: 'galeria' },



      ];
    constructor(){
        console.log("ta cargando");
        
    }

}