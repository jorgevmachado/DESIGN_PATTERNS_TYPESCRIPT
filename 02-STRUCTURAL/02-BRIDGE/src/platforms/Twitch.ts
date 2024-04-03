import IPlatform from './interfaces/IPlatform';

export default class Twitch implements IPlatform {

    constructor() {
        this.configureRMTP();
        console.log('Twitch: Iniciando a transmissão!');
    }

    configureRMTP() {
        this.authToken();
        console.log('Twitch: Configurando o broadcasting...');
    }

    authToken() {
        console.log('Twitch: Autorizando aplicação!...');
    }

}