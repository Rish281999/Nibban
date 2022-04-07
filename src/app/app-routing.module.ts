import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { AdmindashboardComponent } from './pages/admin/admindashboard/admindashboard.component';
import { AdminloginComponent } from './pages/admin/adminlogin/adminlogin.component';
import { AdminmainComponent } from './pages/admin/adminmain/adminmain.component';
import { RegistrationComponent } from './pages/admin/registration/registration.component';
import { TestComponent } from './pages/admin/test/test.component';
import { BaseriComponent } from './pages/baseri/baseri.component';
import { CommercialprintComponent } from './pages/commercialprint/commercialprint.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CorporatedetailsComponent } from './pages/corporatedetails/corporatedetails.component';
import { DigitalComponent } from './pages/digital/digital.component';
import { DirectorsComponent } from './pages/directors/directors.component';
import { EducationcarrerComponent } from './pages/educationcarrer/educationcarrer.component';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import { InternshipsComponent } from './pages/internships/internships.component';
import { JanaandolanComponent } from './pages/janaandolan/janaandolan.component';
import { JobComponent } from './pages/job/job.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { LeadershipComponent } from './pages/leadership/leadership.component';
import { ManagementComponent } from './pages/management/management.component';
import { MediabusinessComponent } from './pages/mediabusiness/mediabusiness.component';
import { MilestoneComponent } from './pages/milestone/milestone.component';
import { NewsComponent } from './pages/news/news.component';
import { PrintingComponent } from './pages/printing/printing.component';
import { StudentunionComponent } from './pages/studentunion/studentunion.component';
import { UserloginComponent } from './pages/userlogin/userlogin.component';
import { VisionComponent } from './pages/vision/vision.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'achievements',component:AchievementsComponent},
  {path:'baseri',component:BaseriComponent},
  {path:'commercialprint',component:CommercialprintComponent},
  {path:'contact',component:ContactComponent},
  {path:'corporatedetails',component:CorporatedetailsComponent},
  {path:'digital',component:DigitalComponent},
  {path:'directors',component:DirectorsComponent},
  {path:'educationcarrer',component:EducationcarrerComponent},
  {path:'events',component:EventsComponent},
  {path:'internships',component:InternshipsComponent},
  {path:'janaandolan',component:JanaandolanComponent},
  {path:'job',component:JobComponent},
  {path:'journey',component:JourneyComponent},
  {path:'leadership',component:LeadershipComponent},
  {path:'management',component:ManagementComponent},
  {path:'mediabusiness',component:MediabusinessComponent},
  {path:'milestone',component:MilestoneComponent},
  {path:'news',component:NewsComponent},
  {path:'printing',component:PrintingComponent},
  {path:'studentunion',component:StudentunionComponent},
  {path:'vision',component:VisionComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'adminmain',component:AdminmainComponent},
  {path:'test',component:TestComponent},
  {path:'registration',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
