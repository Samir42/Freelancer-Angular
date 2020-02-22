import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './job/job.component';
import { ProposalinfoComponent } from '../proposal/proposalinfo/proposalinfo.component';
import { JobfilterComponent } from './jobfilter/jobfilter.component';
import { FilterComponent } from '../user/project/filter/filter.component'
import { CreateComponent } from './create/create.component';
import { RequeststomyjobComponent } from '../user/requeststomyjob/requeststomyjob.component';
import { DoneprojectsComponent } from '../user/doneprojects/doneprojects.component';
import { AuthGuard } from '../auth/auth.guard';

const jobRoutes: Routes = [
  { path: 'jobdetails', component: JobdetailsComponent },
  { path: 'jobs/:id/details', component: JobComponent },
  { path: 'jobs/:id/proposals', component: ProposalinfoComponent },
  { path: 'jobdetails/:id', component: JobComponent },
  { path: 'jobs', component: JobfilterComponent },
  { path: 'me/jobs', component: FilterComponent,canActivate:[AuthGuard] },
  { path: 'me/jobs/:id/requests', component: RequeststomyjobComponent,canActivate:[AuthGuard] },
  { path: 'me/jobs/done', component: DoneprojectsComponent ,canActivate:[AuthGuard]},
  { path: 'job/create', component: CreateComponent ,canActivate:[AuthGuard]},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(jobRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class JobRoutingModule { }
