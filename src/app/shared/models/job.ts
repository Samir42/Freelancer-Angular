import { Time } from '@angular/common';
import { Client } from './client';
import { Freelancer } from './freelancer';
import { JobsSkills } from './jobsSkills';

export interface Job{
    id:number;
    clientId:number;
    freelancerId:number;
    title:string;
    description:string;
    price:number;
    openedAt:any;
    client:Client;
    freelancer:Freelancer;
    jobsSkills:JobsSkills[];
}