import { SkillUser } from './skillsUsers';

export interface Freelancer {
    id: number;
    userId:number;
    payHourly: number;
    password:string;
    companyName:string;
    skillUsers: SkillUser[];
}