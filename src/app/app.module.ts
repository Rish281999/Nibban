import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { LoginComponent } from './pages/login/login.component';

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
    LoginComponent
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
    MatDividerModule
  ],
  providers: [ContactusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
