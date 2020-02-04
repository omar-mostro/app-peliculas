import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {Cast, PeliculaDetalle} from '../../Interfaces/interfaces';
import {ModalController} from '@ionic/angular';
import {DataLocalService} from '../../services/data-local.service';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

    @Input() id;
    pelicula: PeliculaDetalle = {};
    oculto = 150;
    actores: Cast[] = [];
    sliderOptActores = {
        slidesPerView: 3.3,
        freeMode: true,
        spaceBetween: -5
    };

    constructor(private moviesService: MoviesService,
                private modalController: ModalController,
                private dataLocal: DataLocalService) {
    }

    ngOnInit() {
        this.moviesService.getPeliculaDetalle(this.id)
            .subscribe(resp => {
                console.log(resp);
                this.pelicula = resp;
            });

        this.moviesService.getActoresPelicula(this.id)
            .subscribe(resp => {
                console.log(resp);
                this.actores = resp.cast;
            });
    }

    favorito() {
        this.dataLocal.guardarPelicula(this.pelicula);
    }

    regresar() {
        this.modalController.dismiss();
    }
}
