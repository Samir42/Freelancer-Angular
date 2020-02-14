import { Freelancer } from './freelancer';

export interface Request {
    id: number;
    jobId: number;
    freelancerId: 0;
    requestDescription: string;
    howManyDay: number;
    freelancer: Freelancer;
}