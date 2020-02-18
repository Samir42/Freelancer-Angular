import { SkillsUsers } from './skillsUsers';
import { Skill } from './skill';

export interface Freelancer {
    id: number;
    userId:number;
    payHourly: number;
    skillsUsers: SkillsUsers[];
}