import { SkillsUsers } from './skillsUsers';

export interface Freelancer{
    payHourly:number;
    skillsUsers: SkillsUsers[];
}

// export interface Freelancer {
//     id: number;
//     userForeignKey: number;
//     skillUsers: SkillUsers[];
// }