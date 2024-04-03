import IMercadoPago from './interfaces/IMercadoPago';
import Token from '../utils/Token';

export default class MercadoPago implements IMercadoPago {

    private token: Token = new Token();

    authToken(): Token {
        return new Token();
    };

    enviarPagamento(): void {

        this.token = new Token();
        console.log('Enviando pagamentos via Mercado Pago.');

    };

    receberPagamento(): void {
        console.log('Recebendo pagamentos via Mercado Pago.');
    };
}