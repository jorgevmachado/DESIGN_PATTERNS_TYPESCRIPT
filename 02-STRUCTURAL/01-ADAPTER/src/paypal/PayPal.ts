import IPayPalPayment from './interfaces/IPayPalPayment';
import Token from '../utils/Token';

export default class PayPal implements IPayPalPayment {

    private token: Token = new Token();

    authToken(): Token {
        return new Token();
    };

    paypalPayment(): void {
        this.token = this.authToken();
        console.log('TOKEN: ' + this.token.getToken());
        console.log('Sending payment via PayPal!');
    };

    paypalReceive(): void {
        console.log('Receiving payments via PayPal!');
    };
}