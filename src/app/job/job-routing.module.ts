import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './job/job.component';
import { ProposalinfoComponent } from '../proposal/proposalinfo/proposalinfo.component';

const jobRoutes: Routes = [
  { path: 'jobdetails', component: JobdetailsComponent},
  { path: 'jobs/:id/details', component: JobComponent },
  { path: 'jobs/:id/proposals', component: ProposalinfoComponent },
  { path: 'jobdetails/:id', component: JobComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(jobRoutes)
  ],
  exports :[
    RouterModule
  ]

})
export class JobRoutingModule { }
