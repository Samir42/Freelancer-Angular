import { Freelancer } from './freelancer';

export interface User {
    name: string,
    surname: string,
    address: string,
    additionalInfo: string,
    imageUrl: string,
    freelancer: Freelancer,
    client: string,
    id: number,
    userName: string,
    email: string,
    password: string;
    phoneNumber: string,
}