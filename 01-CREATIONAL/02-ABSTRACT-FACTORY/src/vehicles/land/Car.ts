import ILandVehicle from './interfaces/ILandVehicle';

export default class Car implements  ILandVehicle {
    startRoute(): void {
        this.getCargo();
        console.log('Starting the Journey...');
    }
    getCargo(): void {
        console.log('We\'ve got the passengers, we\'re ready!');
    }

}