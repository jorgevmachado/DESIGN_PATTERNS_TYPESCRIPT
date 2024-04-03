import IVehicle from './interfaces/IVehicle';

export default class Car implements IVehicle {
    startRoute(): void {
        this.getCargo();
        console.log('started the route...');
    }

    getCargo(): void {
        console.log('We\'ve picked up the passengers, we\'re ready!');
    }
}