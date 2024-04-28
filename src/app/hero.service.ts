import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// observable and of are probably for asynchronous call, as observable.subscribe method

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 
  getHeroes(): Observable <Hero[]> {
    const heroes = of (HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
  constructor( private messageService: MessageService ) { }
}
