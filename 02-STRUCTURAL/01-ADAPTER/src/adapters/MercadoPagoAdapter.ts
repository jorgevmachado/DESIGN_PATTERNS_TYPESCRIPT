import IPayPalPayment from '../paypal/interfaces/IPayPalPayment';
import IMercadoPago from '../mercado-pago/interfaces/IMercadoPago';
import Token from '../utils/Token';

export default class MercadoPagoAdapter implements IPayPalPayment {
    constructor(private mercadoPago: IMercadoPago) {
        console.log("Adaptando o Mercado Pago utilizando os métodos padrões do PayPal.");

    }
    authToken(): Token {
        return this.mercadoPago.authToken();
    }
    paypalPayment(): void {
        this.mercadoPago.enviarPagamento();
    }
    paypalReceive(): void {
        this.mercadoPago.receberPagamento();
    }
}