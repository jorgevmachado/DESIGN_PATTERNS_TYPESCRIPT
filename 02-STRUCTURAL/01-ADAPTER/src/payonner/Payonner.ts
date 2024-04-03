import IPayonnerPayment from './interfaces/IPayonnerPayment';
import Token from '../utils/Token';

export default class Payonner implements IPayonnerPayment {

    private token: Token = new Token();

    authToken(): Token {
        return new Token();
    };

    sendPayment(): void {

        this.token = this.authToken();
        console.log('TOKEN: ' + this.token.getToken());
        console.log('Sending payment via Payonner!');

    };

    receivePayment(): void {
        console.log('Receiving payments via Payonner!');
    };

}