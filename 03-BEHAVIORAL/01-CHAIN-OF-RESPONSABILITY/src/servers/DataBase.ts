import PermissionType from './PermissionType';

interface IDataBaseItem {
    email: string;
    password: string;
    permission: PermissionType;
}

const DataBase: IDataBaseItem[] = [
    {
        email: 'master@mail.com.br',
        password: '123456',
        permission: PermissionType.ADMIN,
    },
    {
        email: 'user@mail.com.br',
        password: 'u53rp@ass',
        permission: PermissionType.USER,
    }
];

export default DataBase;
