import IPayPalPayment from '../paypal/interfaces/IPayPalPayment';
import Token from '../utils/Token';
import Payonner from '../payonner/Payonner';

export default class PayonnerAdapter implements IPayPalPayment {

    constructor(private payonner: Payonner) {
        console.log('Adapting Payonner using PayPal methods and standards!');
    }

    authToken(): Token {
        return this.payonner.authToken();
    };

    paypalPayment(): void {
        return this.payonner.sendPayment();
    }

    paypalReceive(): void {
        return this.payonner.receivePayment();
    }

}