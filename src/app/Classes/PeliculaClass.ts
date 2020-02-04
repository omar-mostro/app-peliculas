import {DetalleComponent} from '../components/detalle/detalle.component';
import {ModalController} from '@ionic/angular';

export class PeliculaClass {

    // tslint:disable-next-line:variable-name
    private _id: string;

    constructor() {
    }

    async verDetalle(modalController: ModalController) {
        const modal = await modalController.create({
            component: DetalleComponent,
            componentProps: {
                id: this._id
            }
        });

        await modal.present();
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }
}
