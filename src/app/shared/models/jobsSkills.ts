import { Skill } from './skill';

export interface JobsSkills{
    id:number;
    jobId:number;
    skillId:number;
    skill:Skill;
}