import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/services/job.service';
import { JobsSkills } from 'src/app/shared/models/jobsSkills';
import { Skill } from 'src/app/shared/models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

  job: Job = {description:'description',title:'title',price:500} as Job;
  skills:Skill[];
  jobsSkills:JobsSkills[] = [];
  selectedSkills:Skill[];

  constructor(private skillService:SkillService,
              private jobService:JobService,
              private route:Router) { }

  ngOnInit() {
    this.getSkills();
  }

  onSubmit(){
    this.fillSkills();

    this.job.jobsSkills = this.jobsSkills;

    console.log('posted job' , this.job);
    this.jobService.postJob(this.job).subscribe(x=> {console.log(x);this.route.navigate(['/me/jobs'])});
  }

  getSkills(){
    this.skillService.getSkills().subscribe(x=> this.skills = x);
  }

  fillSkills() {
    this.selectedSkills.forEach(skill => {
      const su: JobsSkills = { skill: skill, skillId: 0, id: 0 } as JobsSkills;
      this.jobsSkills.push(su);
    });
  }
}
