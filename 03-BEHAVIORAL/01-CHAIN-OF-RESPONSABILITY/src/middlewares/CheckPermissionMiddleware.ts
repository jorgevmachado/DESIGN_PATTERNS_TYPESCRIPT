import Middleware from './middleware';
import DataBase from '../servers/DataBase';
import PermissionType from '../servers/PermissionType';

export default  class CheckPermissionMiddleware extends  Middleware {
    public check(email: string, password: string): boolean {

        const users = DataBase.filter(item => item.email === email);

        if(!users.length){

            console.log('\x1b[31m' + 'E-mail não cadastrado!');
            return false;

        }

        if(users[0].permission === PermissionType.ADMIN){

            console.log('\x1b[34m' + 'Seja bem-vindo, administrador!');
            return true;

        }

        console.log('\x1b[34m' + 'Seja bem-vindo usuário!');


        return this.checkNext(email, password);

    }

}