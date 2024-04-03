import ILandVehicle from './interfaces/ILandVehicle';

export default class Scooter implements  ILandVehicle {
    startRoute(): void {
        this.getCargo();
        console.log('Starting entry with scooter...');
    }
    getCargo(): void {
        console.log('Order in your backpack!');
    }

}