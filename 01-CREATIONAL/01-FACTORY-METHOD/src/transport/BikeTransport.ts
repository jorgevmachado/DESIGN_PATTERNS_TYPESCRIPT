import Transport from './Transport';
import IVehicle from './vehicles/interfaces/IVehicle';
import Bike from './vehicles/Bike';

export default class BikeTransport extends Transport {
    protected createTransport(): IVehicle {

        return new Bike();

    }

}