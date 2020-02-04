import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {PeliculaDetalle} from '../Interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})
export class DataLocalService {
  private peliculas: PeliculaDetalle[] = [];

    constructor(private storage: Storage) {
    }

    guardarPelicula(pelicula: PeliculaDetalle) {
    this.peliculas.push(pelicula);

    this.storage.set('peliculas', this.peliculas);
    }
}
