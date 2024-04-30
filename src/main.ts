import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
//import routeConfig from './app/routes';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
//import {AppRoutingModule} from './app/app-routing.module'

bootstrapApplication(AppComponent, {
  providers:[
    provideProtractorTestingSupport(),
    //provideRouter()
  ]}
)
  .catch((err) => console.error(err));
