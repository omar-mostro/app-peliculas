import {Pipe, PipeTransform} from '@angular/core';
import {environment} from '../../environments/environment';

@Pipe({
    name: 'images'
})
export class ImagesPipe implements PipeTransform {

    private URL = environment.imgPath;

    transform(img: string, size: string = 'w500'): any {

        if (!img) {
            return './assets/no-image-banner.jpg';
        }

        const imgUrl = `${this.URL}/${size}${img}`;

        return imgUrl;
    }

}
