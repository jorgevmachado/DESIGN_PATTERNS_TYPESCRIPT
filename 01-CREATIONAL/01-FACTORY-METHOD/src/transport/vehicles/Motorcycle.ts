import IVehicle from './interfaces/IVehicle';

export default class Motorcycle implements IVehicle {
    startRoute(): void {
        this.getCargo();
        console.log('starting delivery...');
    }

    getCargo(): void {
        console.log('We have already picked up the order.');
    }
}