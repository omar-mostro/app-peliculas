import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PeliculaDetalle, RespuestaCredits, RespuestaMDB} from '../Interfaces/interfaces';
import {environment} from '../../environments/environment';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {

    private URL = environment.url;
    private apiKey = environment.apiKey;
    private popularesPage = 0;

    constructor(private http: HttpClient) {
    }

    private ejecutarQuery<T>(query: string) {

        query = this.URL + query;
        query += `&api_key=${this.apiKey}&language=es&include_image_language=es`;

        return this.http.get<T>(query);
    }

    getFeature() {
        const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
        const endOfMonth = moment().endOf('month').format('YYYY-MM-DD');

        const query = `/discover/movie?primary_release_date.gte=${startOfMonth}&primary_release_date.lte=${endOfMonth}`;

        return this.ejecutarQuery<RespuestaMDB>(query);
    }

    getPopulares() {

        this.popularesPage++;

        const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;

        return this.ejecutarQuery<RespuestaMDB>(query);
    }

    getPeliculaDetalle(id: string) {

        const query = `/movie/${id}?a=1`;

        return this.ejecutarQuery<PeliculaDetalle>(query);
    }

    getActoresPelicula(id: string) {

        const query = `/movie/${id}/credits?a=1`;

        return this.ejecutarQuery<RespuestaCredits>(query);
    }

    getBuscarPeliculas(textoBuscar: string) {

        return this.ejecutarQuery<RespuestaMDB>(`/search/movie?query=${textoBuscar}`);
    }
}
