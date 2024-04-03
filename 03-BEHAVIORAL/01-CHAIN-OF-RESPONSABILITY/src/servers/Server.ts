import Middleware from '../middlewares/middleware';

export default class Server {

    private middlewares: Middleware;

    constructor(middleware: Middleware) {
        this.middlewares = middleware;
    }

    public logIn(email: string, password: string): boolean {

        if(this.middlewares.check(email, password)) {
            console.log('\x1b[32m' + 'Usuário autorizado com sucesso!');
            return true;
        }

        return false;

    }



}