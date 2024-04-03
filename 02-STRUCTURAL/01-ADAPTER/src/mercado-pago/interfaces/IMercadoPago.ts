import Token from '../../utils/Token';

export default interface IMercadoPago {

    authToken(): Token;
    enviarPagamento(): void;
    receberPagamento(): void;

}