import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatIcon, MatIconModule,MatDividerModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StartusComponent } from './startus/startus.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CardsComponent } from './cards/cards.component';
import { MenuComponent } from './menu/menu.component';
import { LocationsComponent } from './locations/locations.component';
import { PhysicalComponent } from './physical/physical.component';
import { GraduatedComponent } from './graduated/graduated.component';
import { VirtualComponent } from './virtual/virtual.component';
import { InternshipComponent } from './internship/internship.component';
import { IncubatorComponent } from './incubator/incubator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OwlModule } from 'ngx-owl-carousel';
import 'hammerjs';
import { ContactusComponent } from './contactus/contactus.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';
import { AvatarModule } from 'ngx-avatar';
import { NgxGalleryModule } from 'ngx-gallery';
import { NgxImageGalleryModule } from 'ngx-image-gallery';

import { AgmCoreModule } from '@agm/core';
import { MatMenuModule } from '@angular/material/menu';
import { About1Component } from './about1/about1.component';
import { PhotosComponent } from './photos/photos.component';
import { FooterComponent } from './footer/footer.component';
import { Event1Component } from './event1/event1.component';
import { Event2Component } from './event2/event2.component';
import { Event4Component } from './event4/event4.component';
import { Event3Component } from './event3/event3.component';
import 'reframe.js';
import { GalleryComponent } from './gallery/gallery.component';
import { EventslistComponent } from './eventslist/eventslist.component';

const path = [
  { path: '', component: HomeComponent },
  { path: 'startups', component: StartusComponent },
  { path: 'events', component: LoggedinComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'physical', component: PhysicalComponent },
  { path: 'virtual', component: VirtualComponent },
  { path: 'graduated', component: GraduatedComponent },
  { path: 'internship', component: InternshipComponent },
  { path: 'incubator', component: IncubatorComponent },
  { path: 'ipr', component: Event1Component },
  { path: 'mean', component: Event2Component },
  { path: 'applablaunch', component: Event3Component },
  { path: 'applab', component: Event4Component },
  { path: 'gallery', component: GalleryComponent },
  { path: 'eventslist', component: EventslistComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    HomeComponent,

    StartusComponent,

    EventsComponent,

    AboutComponent,

    ContactComponent,

    LoginComponent,

    SignupComponent,

    CardsComponent,

    MenuComponent,

    LocationsComponent,

    PhysicalComponent,

    GraduatedComponent,

    VirtualComponent,

    InternshipComponent,

    IncubatorComponent,

    ContactusComponent,

    LoggedinComponent,

    About1Component,

    PhotosComponent,

    FooterComponent,

    Event1Component,

    Event2Component,


    Event4Component,

    Event3Component,

    GalleryComponent,

    EventslistComponent
  ],
  imports: [
    MatDividerModule,
    MatIconModule,
    BrowserModule,
    RouterModule.forRoot(path),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    OwlModule,
    FlexLayoutModule,
    MatMenuModule,
    MatCardModule,
    AvatarModule,
    NgxImageGalleryModule,

    NgxGalleryModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })

    // Router,
    // CarouselModule,
    // OwlOptions
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
