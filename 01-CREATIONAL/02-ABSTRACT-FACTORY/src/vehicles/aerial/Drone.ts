import IAircraft from './interfaces/IAircraft';

export default class Drone implements IAircraft {

        startRoute(): void {
            this.checkWind();
            this.getCargo();
            console.log('Starting takeoff and route...');
        }

        getCargo(): void {
            console.log('Charge coupled.');
        }

        checkWind(): void {
            console.log('No winds, winds ok!');
        }

}