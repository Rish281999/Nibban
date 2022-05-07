import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list'
import {ContactusService} from './shared/contactus.service'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './header&footer/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './header&footer/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AboutComponent } from './pages/about/about.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
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
import { VisionComponent } from './pages/vision/vision.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminloginComponent } from './pages/admin/adminlogin/adminlogin.component';
import { UserloginComponent } from './pages/userlogin/userlogin.component';
import { AdmindashboardComponent } from './pages/admin/admindashboard/admindashboard.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { AdminmainComponent } from './pages/admin/adminmain/adminmain.component';
import { TestComponent } from './pages/admin/test/test.component';
import { RegistrationComponent } from './pages/admin/registration/registration.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CustomerLoginComponent } from './pages/customer-login/customer-login.component';
import { SubscriptionFormComponent } from './pages/subscription-form/subscription-form.component';
import { EmployeeLoginComponent } from './pages/employee-login/employee-login.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    AchievementsComponent,
    BaseriComponent,
    CommercialprintComponent,
    ContactComponent,
    CorporatedetailsComponent,
    DigitalComponent,
    DirectorsComponent,
    EducationcarrerComponent,
    EventsComponent,
    HomeComponent,
    InternshipsComponent,
    JanaandolanComponent,
    JobComponent,
    JourneyComponent,
    LeadershipComponent,
    ManagementComponent,
    MediabusinessComponent,
    MilestoneComponent,
    NewsComponent,
    PrintingComponent,
    StudentunionComponent,
    VisionComponent,
    AdminloginComponent,
    UserloginComponent,
    AdmindashboardComponent,
    AdminmainComponent,
    TestComponent,
    RegistrationComponent,
    CustomerLoginComponent,
    SubscriptionFormComponent,
    EmployeeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule
    
  ],
  providers: [ContactusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
