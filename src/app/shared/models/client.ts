import { User } from './user';

export interface Client{
    id:number;
    userForeignKey:number;
    companyName:string;
    user:User;
}