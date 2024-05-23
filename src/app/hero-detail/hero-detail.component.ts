import { Component, Input } from '@angular/core';
import {NgIf, UpperCasePipe, Location } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
 
@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule,NgIf, UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  constructor( private heroService: HeroService, private location: Location, private activatedRoute: ActivatedRoute) {}
   hero: Hero | undefined;

   ngOnInit(): void {
    this.getHero()
   }

   getHero(): void {
   const heroId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
   this.heroService.getHeroById(heroId).then(
    hero => this.hero = hero)
   
   }

   goBack(): void {
    this.location.back();
   }
}
