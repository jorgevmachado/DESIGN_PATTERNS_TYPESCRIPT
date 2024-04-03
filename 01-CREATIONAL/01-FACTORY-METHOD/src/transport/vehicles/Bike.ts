import IVehicle from './interfaces/IVehicle';

export default class Bike implements IVehicle {
    startRoute(): void {
        this.getCargo();
        console.log('starting delivery...');
    }

    getCargo(): void {
        console.log('We have already removed the food.');
    }
}