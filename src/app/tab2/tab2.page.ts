import {Component} from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {ModalController} from '@ionic/angular';
import {PeliculaClass} from '../Classes/PeliculaClass';
import {Pelicula} from '../Interfaces/interfaces';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    textoBuscar = '';
    ideas: string[] = ['spiderman', 'Avenger', 'El señor de los anillos'];
    peliculas: Pelicula[] = [];
    buscando = false;
    private pelicula: PeliculaClass;

    constructor(private moviesService: MoviesService,
                private modalController: ModalController) {

        this.pelicula = new PeliculaClass();
    }

    buscar(event: CustomEvent) {
        const valor = event.detail.value;

        this.buscando = true;

        if (valor !== '') {
            this.moviesService.getBuscarPeliculas(valor)
                .subscribe(resp => {
                    this.peliculas = resp.results;
                    this.buscando = false;
                });
        } else {
            this.peliculas = [];
            this.buscando = false;
        }
    }

    async verDetalle(id: string) {
        this.pelicula.id = id;
        this.pelicula.verDetalle(this.modalController);
    }
}
