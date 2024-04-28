import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { HEROES } from '../mock-heroes';
import { NgFor, NgIf } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor,NgIf,UpperCasePipe, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
    heroes: Hero[] = [];
    constructor( private heroService: HeroService, private messageService: MessageService){}

    selectedHero?: Hero
    onSelect(hero:Hero): void{
      this.selectedHero=hero;
      this.messageService.add('HeroesComponent: Selected hero id=' + hero.id)
    }
    
    getHeroes(): void {
     this.heroService.getHeroes().
     subscribe(heroes => this.heroes = heroes)
    }

    //ovo opet procitaj, mada je i vjerovatno nebitno
    ngOnInit(): void {
      this.getHeroes();
    }
}
