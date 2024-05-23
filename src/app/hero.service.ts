import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
//import { HttpClient } from '@angular/common/http';

// observable and of are probably for asynchronous call, as observable.subscribe method

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url = 'http://localhost:3000/hero'
  
  
 async getAllHeroes(): Promise<Hero[]> {
    const data = await fetch (this.url)
    return await data.json() ?? [];
    //return await this.httpClient.get<Hero[]>('http://localhost:3000/hero');
  }

  async getHeroById( id: number ): Promise< Hero | undefined>{
    const hero = await fetch (this.url + '/' + id);
    return await hero.json() ?? {}
  }

  constructor(/*private httpClient:HttpClient,*/  ) { }

  
}
