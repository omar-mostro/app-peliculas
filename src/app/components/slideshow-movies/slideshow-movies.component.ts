import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pelicula} from '../../Interfaces/interfaces';
import {ModalController} from '@ionic/angular';
import {DetalleComponent} from '../detalle/detalle.component';
import {MoviesService} from '../../services/movies.service';
import {PeliculaClass} from '../../Classes/PeliculaClass';

@Component({
    selector: 'app-slideshow-movies',
    templateUrl: './slideshow-movies.component.html',
    styleUrls: ['./slideshow-movies.component.scss'],
})
export class SlideshowMoviesComponent implements OnInit {

    @Input() peliculas: Pelicula[] = [];
    @Input() customClass = '';
    @Input() imagePath: string;
    @Input() slideOpts: object;
    @Input() pares = false;
    @Output() cargarMas = new EventEmitter();


    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
    }

    onClick() {
        this.cargarMas.emit();
    }

    verDetalle(id: string) {
        const peliculaClass = new PeliculaClass();
        peliculaClass.id = id;
        peliculaClass.verDetalle(this.modalController);
    }
}
