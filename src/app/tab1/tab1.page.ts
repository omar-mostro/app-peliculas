import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {Pelicula} from '../Interfaces/interfaces';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    peliculasRecientes: Pelicula[] = [];
    populares: Pelicula[] = [];

    slideOptsBackdrop = {
        slidesPerView: 1.3,
        freeMode: true,
        initialSlide: 1,
        speed: 400
    };

    slideOptsPoster = {
        slidesPerView: 3.3,
        freeMode: true,
        initialSlide: 1,
        speed: 600
    };

    constructor(private moviesService: MoviesService) {
    }

    ngOnInit(): void {
        this.moviesService.getFeature()
            .subscribe(resp => {
                this.peliculasRecientes = resp.results;
            });

        this.getPopulares();
    }

    cargarMas() {
        this.getPopulares();
    }

    getPopulares() {
        this.moviesService.getPopulares()
            .subscribe(resp => {

                this.populares.push(...resp.results);
            });
    }
}
