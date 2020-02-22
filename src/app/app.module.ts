import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EntryComponent } from './entry/entry.component';
import { NeedworkComponent } from './needwork/needwork.component';
import { GreataboutComponent } from './greatabout/greatabout.component';
import { ProjectshowcaseComponent } from './projectshowcase/projectshowcase.component';
import { CompaniesComponent } from './companies/companies.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { SearchresultListComponent } from './search/searchresult-list/searchresult-list.component'
import { SearchfilterComponent } from './search/searchfilter/searchfilter.component';
import { JobfilterComponent } from './job/jobfilter/jobfilter.component';
import { JobresultListComponent } from './job/jobresult-list/jobresult-list.component';
import { ProposalsComponent } from './proposal/proposals/proposals.component';
import { ProposalinfoComponent } from './proposal/proposalinfo/proposalinfo.component';
import { JobnavComponent } from './job/jobnav/jobnav.component';
import { JobdetailsComponent } from './job/jobdetails/jobdetails.component';
import { JobComponent } from './job/job/job.component';
import { JobService } from './services/job.service';
import {JobRoutingModule } from './job/job-routing.module';
import { CreaterequestComponent } from './job/createrequest/createrequest.component';
import { FirsterrorPipe } from './pipes/firsterror.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import { FilterComponent } from './user/project/filter/filter.component';
import { MyprojectsComponent } from './user/project/myprojects/myprojects.component';
import { CreateComponent } from './job/create/create.component';
import { RequestsComponent } from './user/requests/requests.component';
import { RequeststomyjobComponent } from './user/requeststomyjob/requeststomyjob.component';
import { DoneprojectsComponent } from './user/doneprojects/doneprojects.component';
 
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'homepage', component: HomepageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'proposals', component: ProposalsComponent},
  { path: 'proposalinfo', component: ProposalinfoComponent},
  { path: 'me/requests', component: RequestsComponent},
  {
    path: '',
    component: HomepageComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntryComponent,
    NeedworkComponent,
    GreataboutComponent,
    ProjectshowcaseComponent,
    CompaniesComponent,
    LoginComponent,
    HomepageComponent,
    SignupComponent,
    SearchresultListComponent,
    SearchfilterComponent,
    JobfilterComponent,
    JobresultListComponent,
    ProposalsComponent,
    ProposalinfoComponent,
    JobnavComponent,
    JobdetailsComponent,
    JobComponent,
    CreaterequestComponent,
    FirsterrorPipe,
    FilterComponent,
    MyprojectsComponent,
    CreateComponent,
    RequestsComponent,
    RequeststomyjobComponent,
    DoneprojectsComponent
  ],
  imports: [
    MatSliderModule,
    MatSelectModule,
    JobRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
