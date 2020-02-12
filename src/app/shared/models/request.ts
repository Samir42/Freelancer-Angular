import { Freelancer } from './freelancer';

export interface Request {
    id: number;
    jobId: number;
    freelancerId: number;
    requestDescription: string;
    howManyDay: number;
    freelancer: Freelancer;
}