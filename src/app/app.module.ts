import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { EachserviceComponent } from './eachservice/eachservice.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PanelComponent } from './panel/panel.component';
import {AnyserviceService} from './service/anyservice.service';
import {EachserviceService} from './service/eachservice.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    EachserviceComponent,
    ContactComponent,
    NavComponent,
    NotfoundComponent,
    CapitalizePipe,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      {path:"services/:name",component:EachserviceComponent},
      {path:"services",component:ServicesComponent},
      {path:"contact",component:ContactComponent},
      {path:"**",component:NotfoundComponent}
    ])
  ],
  providers: [AnyserviceService,EachserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
