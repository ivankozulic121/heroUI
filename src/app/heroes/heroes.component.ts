import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { HEROES } from '../mock-heroes';
import { NgFor, NgIf } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { RouterLink, RouterModule, ActivatedRoute } from '@angular/router';
import { CommonEngine } from '@angular/ssr';



@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgFor,NgIf,UpperCasePipe, FormsModule, HeroDetailComponent, RouterModule, RouterLink, CommonModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {
    heroes: Hero[] = [];
    route: ActivatedRoute = inject(ActivatedRoute);
    //heroService: HeroService = inject(HeroService);
    constructor(private heroService: HeroService ){
      
      }
    

   
    
    getHeroes(): void {
     this.heroService.getAllHeroes().
     then((heroes: Hero[]) => {
      this.heroes = heroes;
     })
    }

    //ovo opet procitaj, mada je i vjerovatno nebitno
    ngOnInit(): void {
      this.getHeroes();
    }
}
