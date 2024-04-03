import IPayPalPayment from './paypal/interfaces/IPayPalPayment';
import PayPal from './paypal/PayPal';
import IPayonnerPayment from './payonner/interfaces/IPayonnerPayment';
import Payonner from './payonner/Payonner';
import PayonnerAdapter from './adapters/PayonnerAdapter';
import MercadoPagoAdapter from './adapters/MercadoPagoAdapter';
import MercadoPago from './mercado-pago/MercadoPago';

// const payment: IPayPalPayment = new PayPal();
// payment.paypalPayment();
// payment.paypalReceive();

// const payment: IPayPalPayment = new PayonnerAdapter(new Payonner());
const payment: IPayPalPayment = new MercadoPagoAdapter(new MercadoPago());
payment.paypalPayment();
payment.paypalReceive();
