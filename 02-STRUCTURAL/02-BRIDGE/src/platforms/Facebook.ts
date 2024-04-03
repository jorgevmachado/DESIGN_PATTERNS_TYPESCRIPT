import IPlatform from './interfaces/IPlatform';

export default class Facebook implements IPlatform {

    constructor() {
        this.configureRMTP();
        console.log('Facebook: Iniciando a transmissão!');
    }

    configureRMTP() {
        this.authToken();
        console.log('Facebook: Configurando o broadcasting...');
    }

    authToken() {
        console.log('Facebook: Autorizando aplicação!...');
    }

}