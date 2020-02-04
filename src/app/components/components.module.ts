import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlideshowMoviesComponent} from './slideshow-movies/slideshow-movies.component';
import {IonicModule} from '@ionic/angular';
import {PipesModule} from '../pipes/pipes.module';
import {TituloComponent} from './titulo/titulo.component';
import {DetalleComponent} from './detalle/detalle.component';


@NgModule({
    entryComponents: [
        DetalleComponent
    ],
    declarations: [
        SlideshowMoviesComponent,
        TituloComponent,
        DetalleComponent
    ],
    exports: [
        SlideshowMoviesComponent,
        TituloComponent,
        DetalleComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        PipesModule,
    ]
})
export class ComponentsModule {
}
