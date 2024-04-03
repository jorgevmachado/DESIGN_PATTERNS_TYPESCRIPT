import ITransmission from './interfaces/ITransmission';
import IPlatform from '../platforms/interfaces/IPlatform';

export default class Live implements ITransmission {

    constructor(private platform: IPlatform) {

    }

    broadcasting(): void {
        console.log('Iniciando a transmissão!')
    }

    result(): void {
        console.log('****** ON AIR ******');
    }


}