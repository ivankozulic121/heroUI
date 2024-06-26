import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule, RouterLink, ActivatedRoute  } from '@angular/router';
import { Router } from 'express';
import { CommonModule } from '@angular/common';

/*The AppComponent template no longer needs <app-heroes> because the application only displays the HeroesComponent when the user navigates to it.

The <router-outlet> tells the router where to display routed views.*/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule,HeroesComponent, MessagesComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Tour of heroes';
}
