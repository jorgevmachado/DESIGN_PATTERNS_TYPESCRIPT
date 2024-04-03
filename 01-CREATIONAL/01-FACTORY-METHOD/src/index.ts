import CarTransport from './transport/CarTransport';
import MotorcycleTransport from './transport/MotorcycleTransport';
import BikeTransport from './transport/BikeTransport';

console.log('Escolha o tipo de entrega: --uber ou --log ou --eats');

const startTransport = () => {
    if (process.argv.includes('--uber')) {
        const transport = new CarTransport();
        transport.startTransport();
        return;
    } else if (process.argv.includes('--log')) {
        const transport = new MotorcycleTransport();
        transport.startTransport();
        return;
    } else if (process.argv.includes('--eats')) {
        const transport = new BikeTransport();
        transport.startTransport();
    }
    else {
        console.error('Selecione o tipo de entrega.');
        return null;
    }
}

startTransport();