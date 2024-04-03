import Vehicle from '../../products/Vehicle';
import Wheel from '../../components/Wheel';
import VehicleType from '../../components/VehicleType';
import Engine from '../../components/Engine';
import Transmission from '../../components/Transmission';

export interface IBuilder {

    reset(): void;
    getVehicle(): Vehicle;
    addWheel(wheel: Wheel): void;
    setVehicleType(vehicleType:  VehicleType): void;
    setSeats(seats: number): void;
    setEngine(engine: Engine): void;
    setTransmission(transmission: Transmission): void;

}