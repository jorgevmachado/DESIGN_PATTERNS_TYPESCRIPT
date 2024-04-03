import IAircraft from './interfaces/IAircraft';

export default class Airplane implements IAircraft {

        startRoute(): void {
            this.checkWind();
            this.getCargo();
            console.log('Starting Takeoff...');
        }

        getCargo(): void {
            console.log('We\'ve picked up the passengers, we\'re ready!');
        }

        checkWind(): void {
            console.log('Wind at 25km. Winds ok!');
        }

}