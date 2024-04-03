import Middleware from './middleware';
import DataBase from '../servers/DataBase';

export default class CheckUserMiddleware extends  Middleware{

    public check(email: string, password: string): boolean {

        if (email.indexOf('@') === -1) {
            console.log('\x1b[31m' + 'Email inválido');
            return false;

        }

        if(!DataBase.filter(
            item => item.email === email
            &&
            item.password === password).length
        ){
            console.log('\x1b[31m' + 'E-mail e/ou senha inválidos');
            return false;
        }

        return this.checkNext(email, password);

    }
}