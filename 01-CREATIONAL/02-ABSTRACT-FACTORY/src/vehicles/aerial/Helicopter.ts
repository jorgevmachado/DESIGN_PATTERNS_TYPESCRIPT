import IAircraft from './interfaces/IAircraft';

export default class Helicopter implements IAircraft {

        startRoute(): void {
            this.checkWind();
            this.getCargo();
            console.log('Starting Takeoff...');
        }

        getCargo(): void {
            console.log('Passengers ok. Connecting Propellers...');
        }

        checkWind(): void {
            console.log('Winds at 25km, Southeast, winds ok!');
        }

}