export default class Token {

    private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikhjb2RlIFRyZWluYW1lbnRvcyIsImlhdCI6MTUxNjIzOTAyMn0.lxzBZP-3N7DenKLkIjL6RCupOfFCOu8An1d2u66u3d4';

    getToken(): string {
        return this.token;
    }
}