import { Skill } from './skill';
import { Freelancer } from './freelancer';
 
export class SkillUser{
    id:number;
    freelancerId:number;
    skillId:number;
    skill:Skill;
}