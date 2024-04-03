import VehicleType from '../components/VehicleType';
import Engine from '../components/Engine';
import Transmission from '../components/Transmission';
import Wheel from '../components/Wheel';

export default class Vehicle {

    private _vehicleType: VehicleType | undefined;
    private _seats: number | undefined;
    private _engine: Engine | undefined;
    private _transmission: Transmission | undefined
    private _wheels: Wheel[] = [];

    constructor() {}
    addWheel(wheel: Wheel) {
        this._wheels.push(wheel);
    }

    get wheels() {
        return this._wheels;
    }

    get wheelsTotal(): number {
        return this._wheels.length;
    }

    get vehicleType(): VehicleType | undefined {
        return this._vehicleType;
    }

    set vehicleType(vehicleType: VehicleType) {
        this._vehicleType = vehicleType;
    }

    get seats(): number | undefined {
        return this._seats;
    }

    set seats(seats: number) {
        this._seats = seats;
    }

    get engine(): Engine | undefined {
        return this._engine;
    }

    set engine(engine: Engine) {
        this._engine = engine;
    }

    get transmission(): Transmission | undefined {
        return this._transmission;
    }

    set transmission(transmission: Transmission) {
        this._transmission = transmission;
    }
}