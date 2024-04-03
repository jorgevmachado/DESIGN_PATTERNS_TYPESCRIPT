import Client from './vehicles/client/client';
import Company from './vehicles/consts/Company';
import UberTransport from './vehicles/factories/UberTransport';
import NineNineTransport from './vehicles/factories/NineNineTransport';
import LimeTransport from './vehicles/factories/LimeTransport';

const currentCompany = Company.LIME;

const getCompany = (company: string) => {
    switch ( company ) {

        case Company.UBER:
            return new UberTransport();
        case Company.NINE_NINE:
            return new NineNineTransport();
        case Company.LIME:
            return new LimeTransport();
        default:
            console.error('Company not found');
            return new UberTransport();
    }
}

const company = getCompany(currentCompany);
if (company) {
    const client = new Client(getCompany(currentCompany));

    client.startRoute();
}
