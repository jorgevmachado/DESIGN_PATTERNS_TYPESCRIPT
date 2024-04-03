import Middleware from './middleware';

export default  class CheckWeakPasswordMiddleware extends  Middleware {
    public check(email: string, password: string): boolean {

        if (password === "123456") {
            console.log('\x1b[33m' + 'ATENÇÃO: Considere usar uma senha mais segura!');
        }


        return this.checkNext(email, password);

    }

}