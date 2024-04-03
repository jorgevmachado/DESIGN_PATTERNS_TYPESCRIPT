import * as readline  from 'readline';
import Server from './servers/Server';
import CheckUserMiddleware from './middlewares/CheckUserMiddleware';
import CheckPermissionMiddleware from './middlewares/CheckPermissionMiddleware';
import CheckWeakPasswordMiddleware from './middlewares/checkWeakPasswordMiddleware';

function setPromptQuestions() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    rl.question('Digite o seu e-mail: ', (email: string) => {

        rl.question('Digite a sua senha: ', (password: string) => {

            server.logIn(email, password);

            rl.close();

        });
    });

    rl.on('close', setPromptQuestions);

}

console.log('-------------------------------------');
console.log('Server is running...');

const middleware = new CheckUserMiddleware();

middleware.linkWith(new CheckPermissionMiddleware());
middleware.linkWith(new CheckWeakPasswordMiddleware());

const server = new Server(middleware);


setPromptQuestions();