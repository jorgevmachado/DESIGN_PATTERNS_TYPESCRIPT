import ITransportFactory from '../factories/interfaces/ITransportFactory';
import ILandVehicle from '../land/interfaces/ILandVehicle';
import IAircraft from '../aerial/interfaces/IAircraft';

export default class Client {

    private vehicle: ILandVehicle;
    private aircraft: IAircraft;

    constructor(factory: ITransportFactory) {

        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();

    }

    startRoute(): void {
        this.vehicle.startRoute();
        this.aircraft.startRoute();
    }

}